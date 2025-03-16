import Edit from '@/components/action/edit';
import DeleteCustomer from '@/components/customer/delete-customer';
import FormCustomerKategori from '@/components/form/form-customer-kategori';
import { Button } from '@/components/ui/button';
import Pagination from '@/components/ui/pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Kategori Customer',
        href: '/customerkategori',
    },
];
type CustomerKategori = {
    id: number;
    nama_kategori: string;
};
type CustomerKategoriProps = {
    customerkategoris: CustomerKategori[];
};

export default function CustomerTable({ customerkategoris }: CustomerKategoriProps) {
    const [currentPage, setCurrentPage] = useState(1); // State untuk halaman saat ini
    const itemsPerPage = 10; // Jumlah item per halaman

    // Hitung total halaman
    const totalPages = Math.ceil(customerkategoris.length / itemsPerPage);

    // Ambil data yang sesuai dengan halaman saat ini
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentcustomerkategoris = customerkategoris.slice(startIndex, endIndex);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Customer" />
            <div className="p-6 bg-card shadow-md rounded-xl text-card-foreground">
                <h2 className="text-2xl font-semibold mb-6">Customer List</h2>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Nama Kategori</TableHead>
                                <TableHead className="text-center">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentcustomerkategoris.map((customerkategoridata) => (
                                <TableRow key={customerkategoridata.id}>
                                    <TableCell>{customerkategoridata.id}</TableCell>
                                    <TableCell>{customerkategoridata.nama_kategori}</TableCell>
                                    <TableCell className="flex gap-2 justify-center">
                                    <Edit
                                        title="Edit Customer"
                                        form={
                                            <FormCustomerKategori
                                                customerkategori={customerkategoridata}
                                                // onClose={() => setIsOpen(false)}
                                                routeUpdate="customerkategori.update"
                                            />
                                        }
                                    >
                                        {/* Hanya satu child element */}
                                        <Button variant="outline" size="sm">
                                            Edit
                                        </Button>
                                    </Edit>
                                        <DeleteCustomer customerId={customerkategoridata.id} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                {/* Pindahkan Pagination ke sini dan tambahkan styling */}
                <div className="mt-4 flex justify-end">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </AppLayout>
    );
}

