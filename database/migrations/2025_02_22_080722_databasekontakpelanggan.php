<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customer_kategoris', function (Blueprint $table) {
            $table->id();
            $table->string('nama_kategori');
            $table->timestamps();
        });
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('customer_kategori_id')->nullable();
            $table->foreign('customer_kategori_id')->references('id')->on('customer_kategoris')->onDelete('cascade');
            $table->string('nama_customer');
            $table->string('telepon');
            $table->text('alamat');
            $table->string('email')->unique()->nullable();
            $table->text('history_pembelian')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer_kategoris');
        Schema::dropIfExists('customers');
    }
};
