<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $kategoriIds = DB::table('customer_kategoris')->pluck('id')->toArray();
        $customerData = [];

        for ($i = 0; $i < 1000; $i++) {
            $customerData[] = [
                'customer_kategori_id' => $kategoriIds[array_rand($kategoriIds)],
                'nama_customer' => 'Customer ' . ($i + 1),
                'telepon' => '081234567' . str_pad($i % 1000, 3, '0', STR_PAD_LEFT),
                'alamat' => 'Alamat Customer ' . ($i + 1),
                'email' => 'customer' . ($i + 1) . '@example.com',
                'history_pembelian' => 'Pembelian produk A, Pembelian produk B',
                'created_at' => now(),
                'updated_at' => now(),
            ];

            if (count($customerData) >= 500) { // Insert setiap 500 data untuk menghindari overload
                DB::table('customers')->insert($customerData);
                $customerData = []; // Reset array setelah insert
            }
        }

        if (!empty($customerData)) { // Insert sisa data jika ada
            DB::table('customers')->insert($customerData);
        }
    }
}
