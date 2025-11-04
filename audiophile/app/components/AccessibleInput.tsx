import React from 'react';


type Props = React.InputHTMLAttributes<HTMLInputElement> & { label: string };


export default function AccessibleInput({ label, id, ...props }: Props) {
const inputId = id || label.replace(/\s+/g, '-').toLowerCase();
return (
<div className="mb-4">
<label htmlFor={inputId} className="block text-sm font-medium mb-1">{label}</label>
<input id={inputId} {...props} className="w-full border rounded px-3 py-2" />
</div>
);
}