'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ReceiptText, WalletCards, Settings, PiggyBank } from 'lucide-react';
const items = [
  { href: '/', label: 'Обзор', icon: LayoutDashboard },
  { href: '/transactions', label: 'Операции', icon: ReceiptText },
  { href: '/budgets', label: 'Бюджеты', icon: WalletCards },
  { href: '/settings', label: 'Настройки', icon: Settings }
];
export function Sidebar() { const path = usePathname(); return <aside className="sidebar"><div className="brand"><div className="brand-mark"><PiggyBank size={20}/></div><span>FinTrack</span></div><nav>{items.map(({href,label,icon:Icon}) => <Link key={href} href={href} className={path===href?'nav-item active':'nav-item'}><Icon size={19}/><span>{label}</span></Link>)}</nav><div className="sidebar-bottom"><div className="mini-card"><span>Месячный бюджет</span><strong>€ 2 400</strong><div className="progress"><i style={{width:'72%'}}/></div><small>72% использовано</small></div><div className="profile"><div className="avatar">V</div><div><b>Vlad</b><span>Личный аккаунт</span></div></div></div></aside> }
