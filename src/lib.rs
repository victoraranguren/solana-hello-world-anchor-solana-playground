use anchor_lang::prelude::*;

declare_id!("5UQcesyNGAypwzk8zudC2FL2fGrDYi4DyvEwGmmi7n45");

#[program]
mod hello_anchor {
    use super::*;
    pub fn hello_world(_ctx: Context<HelloWorld>) -> Result<()> {
        msg!("Hello World from Solana Blockchain");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct HelloWorld {}
