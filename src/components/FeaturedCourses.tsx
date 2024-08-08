import { BackgroundGradient } from "@/components/ui/background-gradient";
import coursedata from "@/data/music_course.json" 
import Link from "next/link";
function FeaturedCourses(){

  interface courseType{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
  }
     const featuredcourse = coursedata.courses.filter((course:courseType) =>(
        course.isFeatured == true
     )

     )
        return(
         <div className="h-auto px-3 sm:px-3 py-10 w-full bg-gray-900">
              <div className="text-center">
                    <h2 className=" text-green-400 text-xl font-bold py-3">Featured Courses</h2>
                    <h1 className="font-medium text-4xl">Join the Rhythm Revolution</h1>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                  {
                        featuredcourse.map((course:courseType)=>(
                          <div key={course.id}>

                               <BackgroundGradient className=" flex flex-col p-4 rounded-[22px]  dark:bg-zinc-900" >
                                 <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                    <Link href={`/courses/${course.slug}`}>
                                     Learn More
                                    </Link>
                                 </div>

                               </BackgroundGradient >
                           </div> 
                                               
                        ))
                  }
                                      
              </div>
              <div className="text-center mt-20">
                  <Link href={"/courses"}
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-900 bg-white
                     hover:bg-gray-200 transition duration-200 "
                  >
                        View All Courses
                  </Link>
              </div>
         </div>
      )
}

export default FeaturedCourses;