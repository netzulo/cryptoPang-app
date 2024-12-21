import PageBase from './PageBase'

export default function PageMint() {
  return (
    <PageBase>
      <div>
        <div className='flex flex-col'>
          <div className='container mx-auto grid flex-grow items-center gap-8 px-4 py-8 md:grid-cols-2'>
            <div className='card bg-base-100 shadow-xl'>
              <figure className='px-10 pt-10'>
                <img
                  src='https://www.tailwindai.dev/placeholder.svg'
                  alt='NFT Token'
                  className='h-96 w-full rounded-xl object-cover'
                />
              </figure>
              <div className='card-body items-center text-center'>
                <h2 className='card-title'>Token Details</h2>
                <div className='stats shadow'>
                  <div className='stat'>
                    <div className='stat-title'>Total Supply</div>
                    <div className='stat-value text-primary'>25/1000</div>
                  </div>
                  <div className='stat'>
                    <div className='stat-title'>Mint Price</div>
                    <div className='stat-value text-secondary'>0.05 ETH</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card bg-base-100 p-6 shadow-xl'>
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Select Payment Currency</span>
                </label>
                <div className='join w-full'>
                  <button className='btn btn-outline join-item w-1/4'>
                    ETH
                  </button>
                  <button className='btn btn-outline join-item w-1/4'>
                    BNB
                  </button>
                  <button className='btn btn-outline join-item w-1/4'>
                    USDC
                  </button>
                  <button className='btn btn-outline join-item w-1/4'>
                    USDT
                  </button>
                </div>

                <label className='label mt-4'>
                  <span className='label-text'>Quantity</span>
                </label>
                <div className='join'>
                  <button className='btn btn-square btn-outline join-item'>
                    -
                  </button>
                  <input
                    type='number'
                    min='1'
                    max='10'
                    defaultValue={1}
                    className='input join-item input-bordered w-24 text-center'
                  />
                  <button className='btn btn-square btn-outline join-item'>
                    +
                  </button>
                </div>

                <div className='divider'></div>

                <div className='stats shadow'>
                  <div className='stat'>
                    <div className='stat-title'>Total Cost</div>
                    <div className='stat-value text-secondary'>0.05 ETH</div>
                  </div>
                </div>

                <button className='btn btn-primary mt-6 w-full'>
                  Mint Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageBase>
  )
}
