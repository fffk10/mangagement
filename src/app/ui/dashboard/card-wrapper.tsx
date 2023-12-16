import Card from '@/app/ui/common/card'

const CardWrapper = (): JSX.Element => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
      <Card title='最近の更新履歴' />
      <Card title='人気のタイトル' />
      <Card title='最近発売されたタイトル' />
      <Card title='急上昇のタイトル' />
      <Card title='その他' />
    </div>
  )
}

export default CardWrapper
