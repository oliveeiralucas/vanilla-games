'use client'

import { useEffect, useState } from 'react'
import { getSubdomain, getMenuBySubdomain } from '../@navbar/utils'
import {
    CameraIcon,
    ChatBubbleLeftRightIcon,
    GlobeAltIcon,
    PlayCircleIcon,
} from '@heroicons/react/24/outline'
import footerBg from '@/images/perfect-word.png'
import Image from 'next/image'
import Link from 'next/link'

const navigation = {
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: ChatBubbleLeftRightIcon,
        },
        {
            name: 'Instagram',
            href: '#',
            icon: CameraIcon,
        },
        {
            name: 'X',
            href: '#',
            icon: GlobeAltIcon,
        },
        {
            name: 'YouTube',
            href: 'https://teste.com',
            icon: PlayCircleIcon,
        },
    ],
}

export default function Footer() {
    const [subdomain, setSubdomain] = useState<string | null>(null)

    useEffect(() => {
        const host = window.location.hostname
        setSubdomain(getSubdomain(host))
    }, [])

    const menuItems = getMenuBySubdomain(subdomain)

    return (
        <footer
            className="relative bg-no-repeat bg-cover bg-center text-white"
            style={{
                backgroundImage: `url(${footerBg.src})`,
            }}
        >
            <div className="absolute inset-0 bg-black/40 z-0" aria-hidden="true" />

            <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32 relative z-10">
                <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
                    {menuItems.map((item) => (
                        <div key={item.label}>
                            {item.children ? (
                                <>
                                    <h3 className="text-sm font-semibold text-white">{item.label}</h3>
                                    <ul className="mt-4 space-y-2">
                                        {item.children.map((child) => (
                                            <li key={child.label}>
                                                <Link
                                                    href={child.href}
                                                    className="text-sm text-gray-300 hover:text-white"
                                                >
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-sm font-semibold text-white hover:underline"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Newsletter (opcional - pode remover se não for usar) */}
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
                    <div>
                        <h3 className="text-sm font-semibold text-white">Receba novidades</h3>
                        <p className="mt-2 text-sm text-gray-300">
                            As últimas atualizações direto no seu e-mail.
                        </p>
                    </div>
                    <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
                        <label htmlFor="email-address" className="sr-only">
                            Email
                        </label>
                        <input
                            id="email-address"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="Digite seu e-mail"
                            className="w-full min-w-0 rounded-md bg-white/90 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none sm:w-64"
                        />
                        <div className="mt-4 sm:mt-0 sm:ml-4">
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                            >
                                Assinar
                            </button>
                        </div>
                    </form>
                </div>

                {/* Rodapé final com ícones sociais e copyright */}
                <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex gap-x-6 md:order-2">
                        {navigation.social.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-sm text-gray-300 md:order-1 md:mt-0">
                        &copy; {new Date().getFullYear()} Vanilla Games. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
