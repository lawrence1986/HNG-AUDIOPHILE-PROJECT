'use client';
import { useCart } from '../lib/cart';


export default function CartDrawer(){
const { state, dispatch } = useCart();
return (
<aside className="fixed top-16 right-4 w-80 bg-white border shadow p-4">
<h4 className="font-semibold">Cart</h4>
<ul>
{state.items.length === 0 && <li className="text-sm text-gray-500">No items</li>}
{state.items.map((it:any)=> (
<li key={it.id} className="flex justify-between py-2">
<div>
<div className="text-sm">{it.name}</div>
<div className="text-xs text-gray-500">Qty: {it.quantity}</div>
</div>
<div>${it.price * it.quantity}</div>
</li>
))}
</ul>
</aside>
);
}