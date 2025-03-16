import * as React from "react";
import { cn } from "@/lib/utils";

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <table className={cn("w-full border-collapse rounded-lg overflow-hidden", className)} {...props} />
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead className={cn("bg-muted text-muted-foreground", className)} {...props} />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr className={cn("border-b last:border-b-0 hover:bg-accent transition", className)} {...props} />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th className={cn("px-4 py-3 text-left font-medium text-sm", className)} {...props} />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return <tbody className={cn(className)} {...props} />;
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td className={cn("px-4 py-2 text-sm", className)} {...props} />
  );
}

export { Table, TableHeader, TableRow, TableHead, TableBody, TableCell };
