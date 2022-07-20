import { Footer } from "@/components/footer"
import Link from 'next/link'
import { MainLayout } from '@/components/layouts';

const FourOhFour = () => {

  return (
    <MainLayout>
      <div className="bg-white grow-1 flex-center">
        <div className="flex-center flex-col">
          <h2 className="text-xl text-red-400 mb-4">Указанная страница не найдена</h2>
          <Link href='/' >
            <span className="btn-success rounded-md px-4 py-2 text-xl cursor-pointer">Вернуться назад</span>
          </Link>
        </div>
      </div>
      <Footer />
    </MainLayout>
  )
}

export default FourOhFour