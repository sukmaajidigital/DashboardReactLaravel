<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CustomerKategoriController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // Dashboard
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    // Customer
    Route::controller(CustomerKategoriController::class)->group(function () {
        Route::get('customerkategori', 'index')->name('customerkategori.index');
        Route::get('customerkategori/create', 'create')->name('customerkategori.create');
        Route::post('customerkategori', 'store')->name('customerkategori.store');
        Route::get('customerkategori/{customerkategori}/edit', 'edit')->name('customerkategori.edit');
        Route::put('customerkategori/{customerkategori}', 'update')->name('customerkategori.update');
        Route::delete('customerkategori/{customerkategori}', 'destroy')->name('customer.destroy');
    });
    // Customer
    Route::controller(CustomerController::class)->group(function () {
        Route::get('customer', 'index')->name('customer.index');
        Route::get('customer/create', 'create')->name('customer.create');
        Route::post('customer', 'store')->name('customer.store');
        Route::get('customer/{customer}/edit', 'edit')->name('customer.edit');
        Route::put('customer/{customer}', 'update')->name('customer.update');
        Route::delete('customer/{customer}', 'destroy')->name('customer.destroy');
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
