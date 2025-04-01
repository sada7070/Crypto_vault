import { useState } from "react";
import { Button } from "./UI/button";
import { generateMnemonic } from "bip39";
import { InputBox } from "./UI/InputBox";

export function MnemonicGen() {
    const [mnemonic, setMnemonic] = useState("");

    return <div>
        <Button onClick={async() => {
            const mn = await generateMnemonic();
            setMnemonic(mn);
        }} label="Create Seed Phrase"/>

        <InputBox value={mnemonic} />
    </div>
}