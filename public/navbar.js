import Link from "next/link";
import React from "react"

export class Navbar extends React.Component {
    render() {
        return <nav className="topnav">
            <Link href="/"><a className="text-xl text-blue-600">Home</a></Link>
            <Link href="/commercial"><a className="text-xl text-blue-600">Commercial</a></Link>
                <Link href="/pamphlet"><a className="text-xl text-blue-600">Pamphlet</a></Link>
                    <Link href="/sources"><a className="text-xl text-blue-600">Sources</a></Link>
                        <Link href="/authors"><a className="text-xl text-blue-600">Authors</a></Link>
        </nav>
    }
}
