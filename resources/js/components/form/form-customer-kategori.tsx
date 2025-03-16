import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

interface FormCustomerProps {
    customerkategori: {
        id: number;
        nama_kategori: string;
    };
    onClose: () => void; // Pastikan onClose didefinisikan di props
    routeUpdate: string; // Route untuk update data
}

export default function FormCustomer({ customerkategori, onClose, routeUpdate }: FormCustomerProps) {
    const { data, setData, put, processing, reset } = useForm({
        nama_kategori: customerkategori.nama_kategori,
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route(routeUpdate, customerkategori.id), {
            onSuccess: () => {
                reset();
                onClose(); // Tutup modal setelah berhasil submit
            },
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="nama_kategori">Nama Customer</Label>
                <Input id="nama_kategori" value={data.nama_kategori} onChange={(e) => setData("nama_kategori", e.target.value)} required />
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
