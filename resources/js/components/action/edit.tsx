import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface EditProps {
    children: React.ReactNode; // Tombol trigger untuk membuka modal
    form: React.ReactNode; // Form yang akan ditampilkan di dalam modal
    title: string; // Judul modal
}

export default function Edit({ children, form, title }: EditProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {/* Pastikan hanya ada satu child element */}
                {React.Children.only(children)}
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>{title}</DialogTitle>
                {form} {/* Form yang diberikan dari props */}
            </DialogContent>
        </Dialog>
    );
}
