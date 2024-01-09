let courseDiv = document.getElementById("coursesFather");
 
const courses =  [
    {
        image:"../assets/course_img/pic1.jpg",
        tag:"Web Dev",
        title: "MERN Stack Web Development",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti quia eaque. Eligendi soluta dolorum minima, reiciendis commodi deleniti corrupti?",
        price: 2000,
        purchased: 32
    },
    {
        image:"../assets/course_img/pic1.jpg",
        tag:"Web Dev",
        title: "Word Press Theme Development",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti quia eaque. Eligendi soluta dolorum minima, reiciendis commodi deleniti corrupti?",
        price: 3000,
        purchased: 44
    }
]

courseDiv.innerHTML = courses.map(cs => `
        <div class="flex space-x-5 w-1/2 bg-slate-100 min-h-[100px]">
        <div class="w-[745px] overflow-x-hidden">
            <img class="" src=${cs.image} alt="">
        </div>
        <div class="py-5">
        <div class="">
                <p class="bg-offprimary inline px-3 py-1 rounded-full primary font-bold text-sm">${cs.tag}</p>
                <h4 class="text-xl font-bold mt-2">${cs.title}</h4>
                <p class="text-sm mt-2">${cs.details}</p>
        </div>

            <!-- admin info  -->
            <div class="mt-10">
                <div class="flex items-center space-x-3">
                    <img class="w-[40px] h-[40px] rounded-full border_primary " src="../assets/razaunur_ullah.png" alt="">
                    <div>
                        <h3 class="font-bold">Razanur Ullah</h3>
                        <p class="text-md">It Instructor</p>
                    </div>
                </div>
                <div class="mt-4 flex justify-between border-t-[1px] border-black pt-2 pr-4">
                    <p class="text-xl">৳ ${cs.price}<span class="primary"> BDT</span> </p>
                    <p class="flex gap-2 items-center"><i class="fa-solid fa-user-check"></i>${cs.purchased}</p>
                </div>
            </div>
        </div>
        </div>
`)