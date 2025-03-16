import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/text-area";
import { Button } from "../ui/button";

interface FormCustomerProps {
    customer: {
        id: number;
        nama_customer: string;
        email?: string;
        telepon: string;
        alamat: string;
        history_pembelian?: string;
        customerkategori?: {
            id: number;
            nama_kategori: string;
        };
    };
    customerkategoris: { id: number; nama_kategori: string }[];
    onClose: () => void; // Pastikan onClose didefinisikan di props
    routeUpdate: string; // Route untuk update data
}

export default function FormCustomer({ customer, customerkategoris, onClose, routeUpdate }: FormCustomerProps) {
    const { data, setData, put, processing, reset } = useForm({
        nama_customer: customer.nama_customer,
        email: customer.email || "",
        telepon: customer.telepon,
        alamat: customer.alamat,
        history_pembelian: customer.history_pembelian || "",
        customer_kategori_id: customer.customerkategori?.id || "",
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route(routeUpdate, customer.id), {
            onSuccess: () => {
                reset();
                onClose(); // Tutup modal setelah berhasil submit
            },
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="nama_customer">Nama Customer</Label>
                <Input id="nama_customer" value={data.nama_customer} onChange={(e) => setData("nama_customer", e.target.value)} required />
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={data.email} onChange={(e) => setData("email", e.target.value)} required />
            </div>
            <div>
                <Label htmlFor="telepon">Telepon</Label>
                <Input id="telepon" value={data.telepon} onChange={(e) => setData("telepon", e.target.value)} required />
            </div>
            <div>
                <Label htmlFor="alamat">Alamat</Label>
                <Input id="alamat" value={data.alamat} onChange={(e) => setData("alamat", e.target.value)} required />
            </div>
            <div>
                <Label htmlFor="history_pembelian">History Pembelian</Label>
                <Textarea id="history_pembelian" value={data.history_pembelian} onChange={(e) => setData("history_pembelian", e.target.value)} />
            </div>
            <div>
                <Label htmlFor="customer_kategori_id">Kategori Customer</Label>
                <select
                    id="customer_kategori_id"
                    value={data.customer_kategori_id}
                    onChange={(e) => setData("customer_kategori_id", Number(e.target.value))}
                    className="border p-2 w-full rounded-md"
                    required
                >
                    <option value="" disabled>
                        Pilih Kategori
                    </option>
                    {customerkategoris?.map((kategori) => (
                        <option key={kategori.id} value={kategori.id}>
                            {kategori.nama_kategori}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={onClose}>
                    Batal
                </Button>
                <Button type="submit" disabled={processing}>
                    Update
                </Button>
            </div>
        </form>
    );
}
