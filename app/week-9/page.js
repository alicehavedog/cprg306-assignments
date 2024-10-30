"use client";

import { useUserAuth } from "./_utils/auth-context";

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
        <h1>Week-9 demo</h1>
            <div>
                {user ? (
                  <button onClick={logout}>Logout</button>
                ) : (
                    <button onClick={login}>Login wih Github</button>
                )}
            </div>
        </div>
    );
    }