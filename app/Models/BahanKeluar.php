<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BahanKeluar extends Model
{
    use HasFactory;

    protected $table = 'bahan_keluars';

    protected $guarded = [];

    public function bahan()
    {
        return $this->belongsTo(Bahan::class, 'bahan_id');
    }
    public function keperluan()
    {
        return $this->belongsTo(Keperluan::class, 'keperluan_id');
    }
}
