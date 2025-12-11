import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({
        protocol_name: "new_bolt_card_response",
        protocol_version: 1,
    });
}
