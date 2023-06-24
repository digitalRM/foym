
import Link from "next/link"

export function MainNavContact({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <Link
        href="/"
        className="text-sm font-medium text-neutral-500 text-muted-foreground transition-colors hover:text-primary font-sans flex place-items-center"
    >
        Contact
    </Link>
  )
}