import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export async function GET(){const data=await prisma.transaction.findMany({include:{category:true},orderBy:{date:'desc'}});return NextResponse.json(data)}
export async function POST(req:Request){const body=await req.json();if(!body.title||!body.amount||!body.type||!body.categoryId)return NextResponse.json({error:'Некорректные данные'},{status:400});const tx=await prisma.transaction.create({data:{title:String(body.title),amount:Number(body.amount),type:String(body.type),date:new Date(body.date||Date.now()),note:body.note?String(body.note):undefined,categoryId:Number(body.categoryId)},include:{category:true}});return NextResponse.json(tx,{status:201})}
