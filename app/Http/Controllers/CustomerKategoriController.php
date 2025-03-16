<?php

namespace App\Http\Controllers;

use App\Models\CustomerKategori;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerKategoriController extends Controller
{
    public function ajax()
    {
        $customerkategoris = CustomerKategori::all();
        return response()->json($customerkategoris);
    }
    public function index()
    {
        $customerkategoris = CustomerKategori::all();
        return Inertia::render('customerPage/kategori/index', [
            'customerkategoris' => $customerkategoris
        ]);
    }

    public function create()
    {
        return Inertia::render('customerPage/kategori/form');
    }

    public function store(Request $request): RedirectResponse
    {
        try {
            CustomerKategori::create($request->all());
            return redirect()->route('kategori.index')->with('success', 'kategori created successfully.');
        } catch (\Exception $e) {
            return back()
                ->withInput()
                ->withErrors('Failed to create kategori.');
        }
    }

    public function edit(CustomerKategori $customerkategori)
    {
        return Inertia::render('customerPage/kategori/edit', compact('customerkategori'));
    }
    public function update(Request $request, CustomerKategori $customerkategori): RedirectResponse
    {
        try {
            $customerkategori->update($request->all());
            return redirect()->route('kategori.index')->with('success', 'kategori update successfully.');
        } catch (\Exception $e) {
            return back()
                ->withInput()
                ->withErrors('Failed to update kategori.');
        }
    }
    public function destroy(CustomerKategori $customerkategori)
    {
        $customerkategori->delete();
        return to_route('kategori.index')->with('success', 'kategori Deleted successfully.');
    }
}
