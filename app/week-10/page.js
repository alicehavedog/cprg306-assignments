'use client';

import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const login = async () => {
        await gitHubSignIn();
    };

    const logout = async () => {
        await firebaseSignOut();
    };

    return (
        <div>
            <h1>Week-10 demo</h1>
            <div>
                {user ? (
                    <>
                        <button onClick={logout}>Logout</button>
                        <br/>
                        <Link href="/week-10/shopping-list">
                            <button>Continue to your Shopping List</button>
                        </Link>
                    </>
                ) : (
                    <button onClick={login}>Login with Github</button>
                )}
            </div>
        </div>
    );
}
