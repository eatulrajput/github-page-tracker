import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 right-0 border-b border-neutral-100 shadow-md w-full'>
        <div className='flex w-full px-4 py-2 gap-4'>
<Link href={'/'}>Home</Link>
<Link href={'/about'}>About</Link>
<Link href={'/contact'}>Contact</Link>

        </div>
    </div>
  )
}
