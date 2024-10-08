'use client';

import * as React from 'react';
import { PiMoonThin, PiSunThin } from 'react-icons/pi';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function DarkMode() {
	const { setTheme } = useTheme();

	return (
		<div className='flex items-center space-x-4'>
			<span className='font-bold'>Тёмная тема</span>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='outline' size='icon'>
						<PiSunThin className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
						<PiMoonThin className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
						<span className='sr-only'>Toggle theme</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuItem onClick={() => setTheme('light')}>
						Светлая
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme('dark')}>
						Тёмная
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme('system')}>
						Системная
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}

export default DarkMode;
