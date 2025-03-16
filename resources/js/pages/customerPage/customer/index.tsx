import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import EditCustomer from '@/components/customer/edit-customer';
import DeleteCustomer from '@/components/customer/delete-customer';

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
};

export default function CustomerTable({ customers }: CustomerTableProps) {
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
                            {customers.map((customer) => (
                                <TableRow key={customer.id}>
                                    <TableCell>{customer.id}</TableCell>
                                    <TableCell>{customer.nama_customer}</TableCell>
                                    <TableCell>{customer.email || '-'}</TableCell>
                                    <TableCell>{customer.telepon}</TableCell>
                                    <TableCell>{customer.customerkategori?.nama_kategori || '-'}</TableCell>

                                    <TableCell className="flex gap-2">
                                        <EditCustomer customer={customer} customerkategoris={customerkategoris} />
                                        <DeleteCustomer customerId={customer.id} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AppLayout>
    );
}
