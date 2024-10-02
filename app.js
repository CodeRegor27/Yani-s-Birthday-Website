const btn = document.getElementById('showbtn');
const imageContainer = document.getElementsByClassName('imageContainer')[0];

const modalContainer = document.getElementsByClassName('modalContainer')[0];
const modal = document.getElementsByClassName('modal');
const modalTitle = document.getElementById('modalTitle');
const modalPrevBtn = document.getElementById('modalPrevBtn');
const modalNextBtn = document.getElementById('modalNextBtn');
const closeBtn = document.querySelector('.close');
const pagination = document.querySelector('.pagination');
const video = document.getElementById('greetingsVideo')
const modalClosing = document.getElementById('closing');



const greetings = [
    {
        id: 1,
        dataId: 1,
        title: 'Family',
        image: 'Mama_Papa.jpg',
        message: ``,
        senderVideo: 'mama_papa.mp4',
        sender: `Mama & Papa`,
        closing:``
},
{
        id: 1,
        dataId: 2,
        title: 'Family',
        pages: [`page 1`, `page 2`],
        pagesSender: [`Kuya Mafy`, `Kuya Mafy & Ate Hazel`],
        image: 'kuya_mafy.jpg',
        message: [`Happy Birthday Miss P! Hope you enjoy your day. I love you sister.`, ``],
        senderVideo: [``,`Kuya_Mafyy.mp4`],
        sender: `Kuya Mafy & Family`,
        closing:[`Kuya Mafy`,``]
},
{
        id: 1,
        dataId: 3,
        title: 'Family',
        image: 'kuya_rj.jpg',
        message: ``,
        sender: `Kuya Rj`,
        closing:``
},
{
        id: 1,
        dataId: 4,
        title: 'Family',
        image: 'kuya_gran.jpg',
        message: ``,
        senderVideo: `kuya_grann.mp4`,
        sender: `Kuya Gran & Family`,
        closing:``
},
{
        id: 1,
        dataId: 5,
        title: 'Family',
        image: 'kuya_brylle.jpg',
        pages: ['page 1', 'page 2', 'page 3','page 4'],
        pagesSender: ['Kuya Brylle', 'Ate Shela','Xhylah','Hero'],
        message: [``,``,``,``],
        sender: `Kuya Brylle & Family`,
        closing:``
},
{
    id: 1,
    dataId: 6,
    title: 'Family',
    image: 'kuya_cy.jpg',
    message: ``,
    senderVideo: `kuya_cyy.mp4`,
    sender: `Kuya Cy & Family`,
    closing:``
},
{
    id: 1,
    dataId: 7,
    title: 'Family',
    image: 'Rani.jpg',
    message: `Happy birthday, te! thank you kasi paparamdam mu kaku atsu kamu lagi keng tabi ku makasuporta. wish ku keka sana maging successful ka para ilibri muku. charot. maging successful ka kasi balu ku ita rin ing buri mu, na maging worth it ngan ing hard work mu. again, happy birthday! 💝`,
    sender: `Rani`,
    closing:`Raniella`
},
{
    id: 1,
    dataId: 8,
    title: 'Family',
    image: 'pamangkins.jpg',
    message: ``,
    pages:[`page 1`,'page 2'],
    pagesSender: [`Hailey & Xhylah`,`Pamangkins`],
    senderVideo:[`pamangkins.mp4`,`pamangkins_1.mp4`],
    sender: `Pamangkins`,
    closing:``
},
{
    id: 2,
    dataId: 9,
    title: 'Best Friend',
    image: 'Kim.jpg',
    message: `  I've known you since we were kids, and I'm a breathing witness to how you turned into a graceful, young lady. You're one of the purest souls that I've had the pleasure of meeting in this lifetime. And I'm lucky that you are my best friend. God must've seen how fucked up my life decisions are and will be in the future, kaya he said, "Fine, I'll allow you two to be besties." 😆 And honestly? Best decision, boss JC.
                Anyway, you probably know this already, but I'm always grateful that you're a constant presence in my life. I never doubted your sincerity, and I hope that you feel the same way towards me. Sana hanggang sa tumanda tayo't magkaroon ng sariling pamilya (kung may balak man ako), ako pa rin ang magiging takbuhan mo kung magkaroon ka man ng mga problema. I hope that even though we grow old, we'll never grow out of each other. You're one of the people I wish to keep with me until the end of time.  
                Bestie, sana matupad mo lahat ng pangarap mo sa buhay mo at sana nandito pa rin ako sa mga panahon na yon. Gusto kong makita kang mag-succeed sa lahat ng plans mo kasi sobrang deserving mo non. Sana rin patuloy na maging mabait ang mundo sayo. Kakalabanin ka man ng mundo, kalaban na rin nila ako. Lagi lang akong nandito para sayo, and you should remember that. Your fights are my fights, too. 
                Happy, happy birthday to you, my ride or die! I love you very much! I appreciate everything that you do, whether it's for me, for you, or for other people. 
                (If Dianne has 100 fans, I'm one of them. If Dianne has 10, I'm one of them. If Dianne has 0, then just visit my grave. I'll cheer for you from 6 feet under.)`,
    sender: `Kim`,
    closing:`Kim`
},
{
    id: 3,
    dataId: 10,
    title: 'High School Friends',
    image: 'Allana.jpg',
    message: `  happy happy happy birthday dianneee
                i am so grateful to have a such an amazing friend! I know i'm not very affectionate but i hope i'm showing you enough how thankful i am to be your friend. 
                I hope all your wishes come true. I am so happy for you and i'm so proud of what you've become. 
                Wishing you a day filled with love and all the things that make you smile <3`,
    sender: `Allana`,
    closing:`Yana`
},
{
    id: 3,
    dataId: 11,
    title: 'High School Friends',
    image: 'Joan.jpg',
    message: `Hi, Meyer! Happy happy 21st birthdayyyy 🎂🎊.
I know we are busy na sa mga kaniya kaniya natin ginagawa and because of that hindi na tayo masyado nagkikita. But still, I really appreciate na we are still friends and sinasama niyo pa rin ako sa mga chika and ganap niyo sa buhay. Thank you for being my friend pa rin and I know I always can count on you.

I wanted to say din na I'm so proud of you kasi you're soooo hard woking. Napagsasabay mo ang work and school kahit sobrang stressful pareho. Keep it up, dzai! Malapit ka na rin makapagtapos haha. I always include sa prayers ko ang studies and safety ninyo.

Lastly ante, set mo na yung gala natin. Preferably out of town po sana hehe (not charing). Anyways, enjoy your dayyyyy. I miss you a lot and love youuuu😘😘.`,
    sender: `Joan`,
    closing:`Joan Daleeeeee`
},
{
    id: 3,
    dataId: 12,
    title: 'High School Friends',
    image: 'charisse.jpg',
    message: `  Yowww, Meyy!!!!
                I'm glad na friends parin tayo ngayong Birthday mo Hahahah (yknow). Happy Birthday! Another chapter opened, 
                I wish you a day full of Joy and miracles. Gihapon, I pray na you have the strength and courage to face the thrilling life ahead. Palangga tika! Let's catch up soon😉`,
    sender: `Charisse`,
    closing:`Ur madre friend <br> Sister Bongz`
},
{
    id: 4,
    dataId: 14,
    title: 'Church Friends',
    image: 'Misaily.jpg',
    message: `Happy Birthday to the most caring, sweet, and supportive friend! 🎉 Your strength and hardworking spirit inspire everyone around you, and I’m so lucky to have someone like you in my life. May this special day be filled with love, laughter, and all the happiness you truly deserve. Here's to more adventures, endless support, and unforgettable memories together. Have an amazing birthday dayannnn! Love you forever 💖`,
    sender: `Misaily`,
    closing:`Misaily`
},
{
    id: 4,
    dataId: 15,
    title: 'Church Friends',
    image: 'KC.jpg',
    message: `  HI MADAMMMMMM!!! 
                HAPPY HAPPY BIRTHDAY SANA MASARAP HANDA NYO BIGYAN MOKO HAHAHAHA 
                ANG WISH KO LANG FOR YOU IS YUNG WISH MO OH DBA SPECIAL. 
                WAG KANA MAG BAGO OKAY NA YAN AND BE STRONG EVERDAY AGAIN HAPPY BIRTHDAY AND ENJOY YOUR DAY LOVE YOU LOTSSS MADAMMM🤍🎉`,
    sender: `Kc`,
    closing: `From Ganda🤍`
},
{
    id: 4,
    dataId: 16,
    title: 'Church Friends',
    image: 'King.jpg',
    message: `THE MASIPAG, THE MAINITIN ANG ULO, THE PIKON AND LAST BUT NOT THE LEAST THE CARING FRIEND. SYEMPRE, HAPPY BIRTHDAY KASI BIRTHDAY MO! 🥳🥳🥳 YUCK 21 NA SI ACCLA! TANDAAN MO LANG LOLA PAG KULANG NA KULANG KANA SA KAGANDAHAN CHAT KALANG SAAKIN, KING NA 'TO, AKO NA BAHALA.  MASHADO NA KASING MARAMI EH. KALMAHAN NIYO SA MAGIGING PAMANGKIN NAMIN KAYA KO PA NAMAN MAG WAIT UNTIL NEXT YEAR. 🥳🥳🥳`,
    sender: `King`,
    closing:`King "malagu" Jered <br> XOXO`
},
]

window.onload = function () {
    let currentPageImageGallery = 1;
    let maxPageImageGallery = 4
    const displayPhoto = (items) => {
        imageContainer.innerHTML = items.map((item) => {
            const { image, sender, dataId } = item;
            return (
                `<div class="image-wrapper">
                    <div class="images" id="img" data-id="${dataId}" style="background-image: url(${image}); background-size: cover; background-position: center;"></div>
                    <div class="image-text">${sender}</div>
                </div>`
            );
        }).join('');
    };

    const filterFirstCategories = greetings.filter(item => item.id === 1);
    displayPhoto(filterFirstCategories);
    imageContainer.classList.toggle('show');

    function displayPage(pageNumber) {
        const items = greetings.filter(item => item.id == pageNumber);

        if (pageNumber < 1 || pageNumber > maxPageImageGallery) return;

        const titleElement = document.getElementById('title');
        titleElement.textContent = items[0].title;

        displayPhoto(items);
        document.querySelectorAll('.images').forEach(photo => {
            photo.addEventListener('click', handlePhotoClick);
        });

        updateButtonStates(pageNumber);
    }

    function updateButtonStates(pageNumber) {
        const prevButton = document.getElementById('prevBtn');
        const nextButton = document.getElementById('nextBtn');

        prevButton.classList.toggle('disabled', pageNumber === 1);
        nextButton.classList.toggle('disabled', pageNumber === maxPageImageGallery);
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentPageImageGallery > 1) {
            currentPageImageGallery--;
            displayPage(currentPageImageGallery);
        }
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentPageImageGallery < maxPageImageGallery) {
            currentPageImageGallery++;
            displayPage(currentPageImageGallery);
        }
    });

    displayPage(1);

    function handlePhotoClick(event) {
        const photo = event.target;
        currentPhotoDataId = photo.getAttribute('data-id');
        const selected = greetings.find(item => item.dataId == currentPhotoDataId);
    
        // Stop the current video if it exists
        const currentVideo = document.querySelector('video');
        if (currentVideo) {
            currentVideo.pause();         
            currentVideo.currentTime = 0; 
            currentVideo.remove();        
        }
    
        if (selected) {
            if (selected.pages) {
                totalPages = selected.pages.length;
                currentPage = 1;
                updateModalContent();
            } else {
                modalTitle.textContent = selected.sender;
                modalMessage.textContent = selected.message;
                modalClosing.innerHTML = selected.closing;
    
                if (selected.senderVideo) {
                    video.innerHTML = `<video class = "video" controls loop>
                                         <source src="${selected.senderVideo}" type="video/mp4">
                                       </video>`;
                }
                pagination.style.display = 'none';
            }
            modalContainer.style.display = 'flex';
        }
    };
    
    function updateModalContent() {
        const selected = greetings.find(item => item.dataId == currentPhotoDataId);
    
        if (selected) {
            modalPrevBtn.classList.toggle('disabled', currentPage === 1);
            modalNextBtn.classList.toggle('disabled', currentPage === totalPages);
            pagination.style.display = 'flex';
    
            modalTitle.textContent = selected.pagesSender[currentPage - 1];
            modalMessage.textContent = selected.message[currentPage - 1];
            modalClosing.textContent = selected.closing[currentPage - 1];
    
            const currentVideo = selected.senderVideo && selected.senderVideo[currentPage - 1];
            if (currentVideo && currentVideo !== '') {
                video.innerHTML = `<video class="video" controls loop>
                                        <source src='${currentVideo}' type='video/mp4'>
                                   </video>`;
            } else {
                video.innerHTML = '';
            }
        }
    }

    modalPrevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updateModalContent();
        }
    });

    modalNextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updateModalContent();
        }
    });
    function closeModal() {
        modalContainer.style.display = 'none';

        const videoElement = document.querySelector('video');
        if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
    }
    
    }
    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modalContainer) {
            closeModal();
        }
    });
};

const hamMenu = document.querySelector('.hamMenu');
const offScreenMenu = document.querySelector('.offScreenMenu');

hamMenu.addEventListener('click',() => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
