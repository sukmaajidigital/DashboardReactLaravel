<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Root',
            'email' => 'test@example.com',
            'password' => Hash::make('123')
        ]);
        $kategoriIds = [];
        $kategoriData = [];
        for ($i = 1; $i <= 100; $i++) {
            $kategoriData[] = [
                'nama_kategori' => 'Kategori ' . $i,
            ];
        }
        foreach ($kategoriData as $kategori) {
            $kategoriIds[] = DB::table('customer_kategoris')->insertGetId($kategori);
        }

        $this->call([
            CustomerSeeder::class,
        ]);
    }
}
