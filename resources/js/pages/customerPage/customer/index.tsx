import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Table, TableBody, TableCell,  TableHead, TableHeader, TableRow } from '@/components/ui/table';
import DeleteCustomer from '@/components/customer/delete-customer';
import FormCustomer from '@/components/form/form-customer';
import Edit from '@/components/action/edit';
import { Button } from '@/components/ui/button';
import Pagination from '@/components/ui/pagination';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Customer',
        href: '/customer',
    },
];

type Customer = {
    id: number;
    nama_customer: string;
    email?: string;
    telepon: string;
    alamat: string;
    history_pembelian?: string;
    customerkategori?: {
        nama_kategori: string;
    };
};

type CustomerTableProps = {
    customers: Customer[];
    customerkategoris: { id: number; nama_kategori: string }[];
};

export default function CustomerTable({ customers, customerkategoris }: CustomerTableProps) {
    const [currentPage, setCurrentPage] = useState(1); // State untuk halaman saat ini
    const itemsPerPage = 10; // Jumlah item per halaman

    // Hitung total halaman
    const totalPages = Math.ceil(customers.length / itemsPerPage);

    // Ambil data yang sesuai dengan halaman saat ini
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCustomers = customers.slice(startIndex, endIndex);

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
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead className="text-center">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentCustomers.map((customerdata) => (
                                <TableRow key={customerdata.id}>
                                    <TableCell>{customerdata.id}</TableCell>
                                    <TableCell>{customerdata.nama_customer}</TableCell>
                                    <TableCell>{customerdata.email || '-'}</TableCell>
                                    <TableCell>{customerdata.telepon}</TableCell>
                                    <TableCell>{customerdata.customerkategori?.nama_kategori || '-'}</TableCell>
                                    <TableCell className="flex gap-2">
                                    <Edit
                                        title="Edit Customer"
                                        form={
                                            <FormCustomer
                                                customer={customerdata}
                                                customerkategoris={customerkategoris}
                                                // onClose={() => setIsOpen(false)} // Teruskan setIsOpen sebagai prop
                                                routeUpdate="customer.update"
                                            />
                                        }
                                    >
                                        {/* Hanya satu child element */}
                                        <Button variant="outline" size="sm">
                                            Edit
                                        </Button>
                                    </Edit>
                                        <DeleteCustomer customerId={customerdata.id} />
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
