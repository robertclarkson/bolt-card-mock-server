"use client";

import QRCode from "react-qr-code";

export default function Client() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-zinc-50 p-8 font-sans dark:bg-black">
            <h1 className="text-4xl font-bold text-white">Create Card</h1>
            <div style={{ padding: "16px", background: "white" }}>
                <QRCode
                    size={400}
                    style={{ height: "auto", maxWidth: "100%" }}
                    value={window.location.origin + "/api/create"}
                    viewBox={`0 0 256 256`}
                />
            </div>
            <h1 className="text-4xl font-bold text-white">Wipe Card</h1>
            <div style={{ padding: "16px", background: "white" }}>
                <QRCode
                    size={400}
                    style={{ height: "auto", maxWidth: "100%" }}
                    value={`{
        "version": 1,
        "action": "wipe",
        "k0": "11111111111111111111111111111111",
        "k1": "22222222222222222222222222222222",
        "k2": "33333333333333333333333333333333",
        "k3": "44444444444444444444444444444444",
        "k4": "55555555555555555555555555555555"
    }`}
                    viewBox={`0 0 256 256`}
                />
            </div>
            <h1 className="text-4xl font-bold text-white">Load This Website</h1>
            <div style={{ padding: "16px", background: "white" }}>
                <QRCode
                    size={400}
                    style={{ height: "auto", maxWidth: "100%" }}
                    value={window.location.origin}
                    viewBox={`0 0 256 256`}
                />
            </div>

            <a
                className="text-4xl font-bold text-white underline"
                href={"boltcard://program?url=" + encodeURIComponent(window.location.origin + "/api/create")}
            >
                Boltcard Program Deeplink
            </a>
            <a
                className="text-4xl font-bold text-white underline"
                href={"boltcard://reset?url=" + encodeURIComponent(window.location.origin + "/api/reset")}
            >
                Boltcard Reset Deeplink
            </a>
        </div>
    );
}
