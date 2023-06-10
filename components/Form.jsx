import Link from 'next/link';

const Form = ({
  type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section class='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text_left'>
        <span className='blue_gradient'>プロンプトを{type}する</span>
      </h1>
      <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>プロンプト</span>
          <textarea value={post.prompt}
          onChange={(e)=>setPost({...post, prompt:e.target.value})}
          placeholder='プロンプトを入力してください。'
          required
          className='form_textarea' />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            タグ{` `}
            <span className='font-normal'>(学問, プログラミング, アイデア)</span>
          </span>
          <input value={post.tag}
          onChange={(e)=>setPost({...post, tag:e.target.value})}
          placeholder='プログラミング'
          required
          className='form_input' />
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>キャンセル</Link>
          <button type='submit' disabled={submitting} className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
            {submitting ? `${type}中...` : `${type}する`}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form