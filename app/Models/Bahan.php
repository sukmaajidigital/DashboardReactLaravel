<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bahan extends Model
{
    use HasFactory;

    protected $table = 'bahans';

    protected $guarded = [];

    public function bahankategori()
    {
        return $this->belongsTo(BahanKategori::class, 'bahan_kategori_id');
    }

    public function bahanMasuk()
    {
        return $this->hasMany(BahanMasuk::class, 'bahan_id');
    }

    public function bahanKeluar()
    {
        return $this->hasMany(BahanKeluar::class, 'bahan_id');
    }
}
