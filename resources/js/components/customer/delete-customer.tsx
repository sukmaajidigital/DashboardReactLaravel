import { useForm } from '@inertiajs/react';
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface DeleteCustomerProps {
    customerId: number;
}

export default function DeleteCustomer({ customerId }: DeleteCustomerProps) {
    const { delete: destroy, processing } = useForm({});

    const handleDelete = () => {
        destroy(route('customer.destroy', customerId));
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive" size="sm">Delete</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Are you sure?</DialogTitle>
                <p>Once deleted, this action cannot be undone.</p>
                <DialogFooter>
                    <Button variant="secondary">Cancel</Button>
                    <Button variant="destructive" onClick={handleDelete} disabled={processing}>Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
