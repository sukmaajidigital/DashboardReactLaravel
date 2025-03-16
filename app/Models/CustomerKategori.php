<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerKategori extends Model
{
    use HasFactory;
    protected $table = 'customer_kategoris';
    protected $guarded = [];

    public function customers()
    {
        return $this->hasMany(Customer::class, 'customer_kategori_id');
    }
}
