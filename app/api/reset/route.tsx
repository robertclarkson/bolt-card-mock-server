import { NextResponse } from "next/server";

/**
 * This is for the deeplink to reset/wipe the Boltcard
 * @param request
 * @returns
 */
export async function POST(request: Request) {
    return NextResponse.json({
        version: 1,
        action: "wipe",
        k0: "11111111111111111111111111111111",
        k1: "22222222222222222222222222222222",
        k2: "33333333333333333333333333333333",
        k3: "44444444444444444444444444444444",
        k4: "55555555555555555555555555555555",
    });
}
