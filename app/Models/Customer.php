<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $table = 'customers';
    protected $guarded = [];

    public function customerkategori()
    {
        return $this->belongsTo(CustomerKategori::class, 'customer_kategori_id');
    }
}
