import { NextResponse } from "next/server";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "your.domain.com";

export async function GET(request: Request) {
    return NextResponse.json({
        protocol_name: "new_bolt_card_response",
        protocol_version: 1,
        card_name: "Spending_Card",
        lnurlw_base: `lnurlw://${DOMAIN}/api/mock`,
        // "uid_privacy": "Y",
        k0: "11111111111111111111111111111111",
        k1: "22222222222222222222222222222222",
        k2: "33333333333333333333333333333333",
        k3: "44444444444444444444444444444444",
        k4: "55555555555555555555555555555555",
    });
}
export async function POST(request: Request) {
    return NextResponse.json({
        protocol_name: "new_bolt_card_response",
        protocol_version: 1,
        card_name: "Spending_Card",
        lnurlw_base: `lnurlw://${DOMAIN}/api/mock`,
        // "uid_privacy": "Y",
        k0: "11111111111111111111111111111111",
        k1: "22222222222222222222222222222222",
        k2: "33333333333333333333333333333333",
        k3: "44444444444444444444444444444444",
        k4: "55555555555555555555555555555555",
    });
}
