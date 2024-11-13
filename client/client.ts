const helloWorld = async () => {
  const transaction = await pg.program.methods.helloWorld().transaction();
  
  const transactionID = await web3.sendAndConfirmTransaction(
    pg.connection,
    transaction,
    [pg.wallet.keypair]
  );

  console.log(
    "Transaction Complete: ",
    `https://explorer.solana.com/tx/${transactionID}?cluster=devnet`
  );
};

helloWorld();
