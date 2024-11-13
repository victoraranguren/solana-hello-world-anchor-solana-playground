// No imports needed: web3, anchor, pg and more are globally available

describe("HelloWorld", () => {
  it("HelloWorld", async () => {
    // Generate keypair for the new account
    const newAccountKp = new web3.Keypair();

    const txHash = await pg.program.methods.helloWorld()
      .accounts({
        newAccount: newAccountKp.publicKey,
        signer: pg.wallet.publicKey,
        systemProgram: web3.SystemProgram.programId,
      })
      .signers([newAccountKp])
      .rpc();

    console.log(`Use 'solana confirm -v ${txHash} to see the logs`);

    // Confirm transaction
    await pg.connection.confirmTransaction(txHash);

    console.log("Hello World did")

  });
});
