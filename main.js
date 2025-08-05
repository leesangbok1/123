document.addEventListener('DOMContentLoaded', () => {

    // --- Language Data Store ---
    const translations = {
        en: {
            nav_services: "Services",
            nav_success: "Success Stories",
            nav_why_us: "Why Us",
            nav_consultation: "Consultation",
            hero_title: "Frustrated with Visa Issues? <br>Your New Chapter in Korea Starts Here.",
            hero_subtitle: "Expert visa solutions by ARLIGHT K-VISA, the most trusted administrative agent by Viet K-Connect.",
            hero_cta: "<i class='fas fa-paper-plane'></i> Get Your FREE Consultation",
            stat1_title: "Viet K-Connect Certified",
            stat1_desc: "#1 Trusted Visa Expert",
            stat2_title: "Gov. Registered Agency",
            stat2_desc: "Official Immigration Support",
            stat3_title: "24/7 Direct Support",
            stat3_desc: "Expert Answers Anytime",
            services_title: "Our Expertise",
            services_subtitle: "Click on a service to see how we provide a different level of support.",
            service_cat1: "Visa Change (Status Change)",
            service_cat2: "Visa Issuance (New Application)",
            visa_type_skilled: "Skilled Worker",
            visa_type_resident: "Resident",
            visa_type_permanent: "Permanent Resident",
            visa_type_trainee: "General Trainee",
            e7_desc: "For professionals and skilled workers.",
            f2_desc: "Long-term residency via points or marriage.",
            f5_desc: "Your final step to a permanent home in Korea.",
            e7_issue_desc: "Inviting skilled professionals from abroad.",
            d4_desc: "For Korean language or other training programs.",
            offer_title: "Groundbreaking Offer!",
            offer_desc: "For Visa Issuance (E-7, D-4): ₩0 Initial Fee. You only pay upon successful visa issuance!",
            success_title: "Proven Success on Viet K-Connect",
            success_subtitle_v2: "Don't just take our word for it. Read real, unedited reviews from our clients on Viet K-Connect.",
            story1_content: "\"Switching from a D-2 to an E-7 visa seemed impossible. ARLIGHT K-VISA handled everything perfectly. I got my visa in just 3 weeks!\"",
            story2_content: "\"As a regional talent, the F-2-R visa process was complex. The team provided clear guidance and secured my residency. Thank you!\"",
            story3_content: "\"After 7 years in Korea, I finally got my F-5 permanent residency. The meticulous document preparation by ARLIGHT K-VISA was the key.\"",
            more_reviews_cta: "<i class='fas fa-book-open'></i> Read More Reviews on Viet K-Connect",
            why_us_title: "Why Choose ARLIGHT K-VISA?",
            feature1_title: "Unmatched Trust",
            feature1_desc: "Designated as the most reliable expert by <a href='https://gfewkf.netlify.app/' target='_blank'>Viet K-Connect</a>. Your future is in safe hands.",
            feature2_title: "Nationwide Coverage",
            feature2_desc: "No matter where you are in Korea, we provide full support for your visa needs. We are your nationwide partner.",
            feature3_title: "Direct Expert Handling",
            feature3_desc: "Every case is personally handled by ARLIGHT K-VISA, a certified expert. No intermediaries, just direct, professional advice.",
            consult_title: "Ready to Start?",
            consult_desc: "Your visa questions deserve expert answers. Fill out the form, and our certified administrative agent will contact you directly. All inquiries are handled with confidentiality and care, 24/7.",
            form_name: "Name",
            form_phone: "Phone Number (Optional)",
            form_email: "Email Address",
            form_facebook: "ID Facebook (Optional)",
            form_want_visa: "Desired Visa Type",
            form_message: "Your Question",
            form_submit: "Submit for FREE Consultation",
            footer_copyright: "COPYRIGHT © ARLIGHT K-VISA. ALL RIGHTS RESERVED.",
            footer_biz_info: "Business Registration No: 000-00-00000",
            modal_why_us_subtitle: "Our Differentiated Service:",
            modal_e7_change_title: "E-7 Visa Change: Your Professional Pathway",
            modal_e7_change_desc: "Transitioning to an E-7 visa is a critical career step. We specialize in making this process seamless.",
            modal_e7_change_li1: "<i class='fas fa-check-circle'></i> <strong>Success-Based Strategy:</strong> We conduct a rigorous pre-assessment. We only take on cases with a high probability of success, saving you time and money.",
            modal_e7_change_li2: "<i class='fas fa-check-circle'></i> <strong>Document Perfection:</strong> We don't just collect your documents. We craft a compelling story that highlights your skills and value to Korea.",
            modal_e7_change_li3: "<i class='fas fa-check-circle'></i> <strong>The Benefit to You:</strong> A secure job, a stable future, and the first major step towards permanent residency (F-5).",
            modal_f2_title: "F-2 Resident Visa: Settle in Korea",
            modal_f2_desc: "The F-2 visa offers long-term stability. We are experts in the points-based system (F-2-7) and regional talent visas (F-2-R).",
            modal_f2_li1: "<i class='fas fa-check-circle'></i> <strong>Maximized Point Calculation:</strong> We find every possible point to maximize your score, from your income and education to volunteer work.",
            modal_f2_li2: "<i class='fas fa-check-circle'></i> <strong>Future-Proof Planning:</strong> We advise you on how to build your profile for a successful application, even if you don't qualify today.",
            modal_f2_li3: "<i class='fas fa-check-circle'></i> <strong>The Benefit to You:</strong> More freedom in employment, the ability to invite your family, and a clear path to the F-5 visa.",
            modal_f5_title: "F-5 Permanent Residency: Make Korea Your Home",
            modal_f5_desc: "This is the ultimate goal. The requirements are strict, and our precision is your greatest asset.",
            modal_f5_li1: "<i class='fas fa-check-circle'></i> <strong>Flawless Application:</strong> F-5 applications allow no room for error. We ensure every single document is perfect and every requirement is met.",
            modal_f5_li2: "<i class='fas fa-check-circle'></i> <strong>Long-Term Partnership:</strong> We often work with clients from their E-7 or F-2 stages, building a long-term strategy for their F-5 application.",
            modal_f5_li3: "<i class='fas fa-check-circle'></i> <strong>The Benefit to You:</strong> Live and work in Korea forever with almost all the rights of a citizen. True stability for you and your family.",
            modal_e7_issue_title: "E-7 Visa Issuance: Start Your Career in Korea",
            modal_e7_issue_desc: "Bringing talent to Korea requires careful coordination between the applicant and the company.",
            modal_e7_issue_li1: "<i class='fas fa-check-circle'></i> <strong>Revolutionary Cost Structure:</strong> <strong>Pay nothing upfront.</strong> Our service fee is only charged upon the successful issuance of your visa. 100% risk-free for you.",
            modal_e7_issue_li2: "<i class='fas fa-check-circle'></i> <strong>Employer-Side Support:</strong> We guide your Korean employer through their responsibilities, making the process smooth for them and strengthening your application.",
            modal_e7_issue_li3: "<i class='fas fa-check-circle'></i> <strong>The Benefit to You:</strong> Start your dream job in Korea with zero financial risk in the visa process.",
            modal_d4_title: "D-4 Trainee Visa: Your First Step in Korea",
            modal_d4_desc: "The D-4 visa is the perfect starting point for learning the language and culture.",
            modal_d4_li1: "<i class='fas fa-check-circle'></i> <strong>Risk-Free Application:</strong> Just like the E-7 issuance, you <strong>pay our fee only after your visa is approved.</strong>",
            modal_d4_li2: "<i class='fas fa-check-circle'></i> <strong>Pathway Advising:</strong> We don't just get you the D-4. We provide a free consultation on how to transition from a D-4 to a student (D-2) or work (E-7) visa in the future.",
            modal_d4_li3: "<i class='fas fa-check-circle'></i> <strong>The Benefit to You:</strong> Begin your journey in Korea with confidence and a clear plan for your future, without any initial financial burden for our service.",
        },
        vi: {
            nav_services: "Dịch vụ",
            nav_success: "Câu chuyện thành công",
            nav_why_us: "Tại sao chọn chúng tôi",
            nav_consultation: "Tư vấn",
            hero_title: "Thất vọng về vấn đề Visa? <br>Chương mới của bạn tại Hàn Quốc bắt đầu từ đây.",
            hero_subtitle: "Giải pháp visa chuyên nghiệp từ ARLIGHT K-VISA, chuyên gia hành chính được Viet K-Connect tin tưởng nhất.",
            hero_cta: "<i class='fas fa-paper-plane'></i> Nhận Tư vấn MIỄN PHÍ",
            stat1_title: "Chứng nhận bởi Viet K-Connect",
            stat1_desc: "Chuyên gia Visa tin cậy #1",
            stat2_title: "Cơ quan được chính phủ đăng ký",
            stat2_desc: "Hỗ trợ nhập cư chính thức",
            stat3_title: "Hỗ trợ trực tiếp 24/7",
            stat3_desc: "Chuyên gia trả lời mọi lúc",
            services_title: "Chuyên môn của chúng tôi",
            services_subtitle: "Nhấp vào một dịch vụ để xem chúng tôi cung cấp một cấp độ hỗ trợ khác biệt như thế nào.",
            service_cat1: "Thay đổi Visa (Chuyển đổi tư cách)",
            service_cat2: "Cấp mới Visa (Xin mới)",
            visa_type_skilled: "Lao động có tay nghề",
            visa_type_resident: "Cư trú",
            visa_type_permanent: "Thường trú nhân",
            visa_type_trainee: "Thực tập sinh",
            e7_desc: "Dành cho chuyên gia và lao động có tay nghề.",
            f2_desc: "Cư trú dài hạn qua điểm hoặc kết hôn.",
            f5_desc: "Bước cuối cùng đến ngôi nhà vĩnh viễn tại Hàn Quốc.",
            e7_issue_desc: "Mời các chuyên gia có tay nghề từ nước ngoài.",
            d4_desc: "Dành cho các chương trình đào tạo tiếng Hàn hoặc khác.",
            offer_title: "Ưu đãi đột phá!",
            offer_desc: "Đối với cấp Visa (E-7, D-4): Phí ban đầu 0 KRW. Bạn chỉ trả tiền khi cấp visa thành công!",
            success_title: "Thành công đã được chứng minh trên Viet K-Connect",
            success_subtitle_v2: "Đừng chỉ nghe lời chúng tôi. Hãy đọc những đánh giá thật, chưa qua chỉnh sửa từ khách hàng của chúng tôi trên Viet K-Connect.",
            story1_content: "\"Việc chuyển từ visa D-2 sang E-7 tưởng chừng như không thể. ARLIGHT K-VISA đã xử lý mọi thứ một cách hoàn hảo. Tôi đã nhận được visa chỉ trong 3 tuần!\"",
            story2_content: "\"Là một tài năng khu vực, quy trình xin visa F-2-R rất phức tạp. Đội ngũ đã hướng dẫn rõ ràng và đảm bảo quyền cư trú cho tôi. Cảm ơn!\"",
            story3_content: "\"Sau 7 năm ở Hàn Quốc, cuối cùng tôi đã có được thẻ thường trú F-5. Sự chuẩn bị hồ sơ tỉ mỉ của ARLIGHT K-VISA là chìa khóa thành công.\"",
            more_reviews_cta: "<i class='fas fa-book-open'></i> Đọc thêm đánh giá trên Viet K-Connect",
            why_us_title: "Tại sao chọn ARLIGHT K-VISA?",
            feature1_title: "Niềm tin tuyệt đối",
            feature1_desc: "Được chỉ định là chuyên gia đáng tin cậy nhất bởi <a href='https://gfewkf.netlify.app/' target='_blank'>Viet K-Connect</a>. Tương lai của bạn được đặt trong tay an toàn.",
            feature2_title: "Phủ sóng toàn quốc",
            feature2_desc: "Dù bạn ở đâu tại Hàn Quốc, chúng tôi cung cấp hỗ trợ đầy đủ cho nhu cầu visa của bạn. Chúng tôi là đối tác toàn quốc của bạn.",
            feature3_title: "Chuyên gia trực tiếp xử lý",
            feature3_desc: "Mọi trường hợp đều do chuyên gia được chứng nhận ARLIGHT K-VISA xử lý cá nhân. Không qua trung gian, chỉ có lời khuyên chuyên nghiệp, trực tiếp.",
            consult_title: "Sẵn sàng bắt đầu?",
            consult_desc: "Những câu hỏi về visa của bạn xứng đáng có câu trả lời từ chuyên gia. Điền vào biểu mẫu và chuyên gia hành chính được chứng nhận của chúng tôi sẽ liên hệ trực tiếp với bạn. Mọi yêu cầu đều được xử lý bảo mật và cẩn thận, 24/7.",
            form_name: "Tên",
            form_phone: "Số điện thoại (Tùy chọn)",
            form_email: "Địa chỉ email",
            form_facebook: "ID Facebook (Tùy chọn)",
            form_want_visa: "Loại Visa mong muốn",
            form_message: "Câu hỏi của bạn",
            form_submit: "Gửi để được tư vấn MIỄN PHÍ",
            footer_copyright: "BẢN QUYỀN © ARLIGHT K-VISA. BẢO LƯU MỌI QUYỀN.",
            footer_biz_info: "Số đăng ký kinh doanh: 000-00-00000",
            modal_why_us_subtitle: "Dịch vụ khác biệt của chúng tôi:",
            modal_e7_change_title: "Thay đổi Visa E-7: Con đường sự nghiệp của bạn",
            modal_e7_change_desc: "Chuyển đổi sang visa E-7 là một bước ngoặt quan trọng trong sự nghiệp. Chúng tôi chuyên làm cho quá trình này trở nên liền mạch.",
            modal_e7_change_li1: "<i class='fas fa-check-circle'></i> <strong>Chiến lược dựa trên thành công:</strong> Chúng tôi tiến hành đánh giá sơ bộ nghiêm ngặt. Chúng tôi chỉ nhận những trường hợp có khả năng thành công cao, giúp bạn tiết kiệm thời gian và tiền bạc.",
            modal_e7_change_li2: "<i class='fas fa-check-circle'></i> <strong>Hoàn thiện hồ sơ:</strong> Chúng tôi không chỉ thu thập tài liệu của bạn. Chúng tôi tạo ra một câu chuyện hấp dẫn làm nổi bật kỹ năng và giá trị của bạn đối với Hàn Quốc.",
            modal_e7_change_li3: "<i class='fas fa-check-circle'></i> <strong>Lợi ích cho bạn:</strong> Một công việc an toàn, một tương lai ổn định và là bước đi quan trọng đầu tiên để hướng tới thẻ thường trú (F-5).",
            modal_f2_title: "Visa cư trú F-2: An cư tại Hàn Quốc",
            modal_f2_desc: "Visa F-2 mang lại sự ổn định lâu dài. Chúng tôi là chuyên gia về hệ thống tính điểm (F-2-7) và visa tài năng khu vực (F-2-R).",
            modal_f2_li1: "<i class='fas fa-check-circle'></i> <strong>Tính điểm tối đa:</strong> Chúng tôi tìm kiếm mọi điểm có thể để tối đa hóa điểm số của bạn, từ thu nhập, học vấn đến công việc tình nguyện.",
            modal_f2_li2: "<i class='fas fa-check-circle'></i> <strong>Lập kế hoạch cho tương lai:</strong> Chúng tôi tư vấn cho bạn cách xây dựng hồ sơ để xin visa thành công, ngay cả khi bạn chưa đủ điều kiện hôm nay.",
            modal_f2_li3: "<i class='fas fa-check-circle'></i> <strong>Lợi ích cho bạn:</strong> Tự do hơn trong việc làm, có khả năng mời gia đình và một con đường rõ ràng đến visa F-5.",
            modal_f5_title: "Thường trú nhân F-5: Biến Hàn Quốc thành ngôi nhà của bạn",
            modal_f5_desc: "Đây là mục tiêu cuối cùng. Các yêu cầu rất nghiêm ngặt, và sự chính xác của chúng tôi là tài sản lớn nhất của bạn.",
            modal_f5_li1: "<i class='fas fa-check-circle'></i> <strong>Hồ sơ không tì vết:</strong> Hồ sơ F-5 không cho phép sai sót. Chúng tôi đảm bảo mọi tài liệu đều hoàn hảo và mọi yêu cầu đều được đáp ứng.",
            modal_f5_li2: "<i class='fas fa-check-circle'></i> <strong>Long-Term Partnership:</strong> Chúng tôi thường làm việc với khách hàng từ giai đoạn E-7 hoặc F-2, xây dựng một chiến lược dài hạn cho hồ sơ F-5 của họ.",
            modal_f5_li3: "<i class='fas fa-check-circle'></i> <strong>The Benefit to You:</strong> Live and work in Korea forever with almost all the rights of a citizen. True stability for you and your family.",
            modal_e7_issue_title: "Cấp mới Visa E-7: Bắt đầu sự nghiệp tại Hàn Quốc",
            modal_e7_issue_desc: "Việc đưa nhân tài đến Hàn Quốc đòi hỏi sự phối hợp cẩn thận giữa người nộp đơn và công ty.",
            modal_e7_issue_li1: "<i class='fas fa-check-circle'></i> <strong>Cấu trúc chi phí mang tính cách mạng:</strong> <strong>Không trả trước bất kỳ khoản nào.</strong> Phí dịch vụ của chúng tôi chỉ được tính khi visa của bạn được cấp thành công. 100% không rủi ro cho bạn.",
            modal_e7_issue_li2: "<i class='fas fa-check-circle'></i> <strong>Hỗ trợ phía nhà tuyển dụng:</strong> Chúng tôi hướng dẫn nhà tuyển dụng Hàn Quốc của bạn thực hiện các trách nhiệm của họ, làm cho quy trình trở nên suôn sẻ và củng cố hồ sơ của bạn.",
            modal_e7_issue_li3: "<i class='fas fa-check-circle'></i> <strong>Lợi ích cho bạn:</strong> Bắt đầu công việc mơ ước tại Hàn Quốc mà không có rủi ro tài chính nào trong quá trình xin visa.",
            modal_d4_title: "Visa thực tập sinh D-4: Bước đầu tiên của bạn tại Hàn Quốc",
            modal_d4_desc: "Visa D-4 là điểm khởi đầu hoàn hảo để học ngôn ngữ và văn hóa.",
            modal_d4_li1: "<i class='fas fa-check-circle'></i> <strong>Xin visa không rủi ro:</strong> Giống như cấp visa E-7, bạn <strong>chỉ trả phí dịch vụ của chúng tôi sau khi visa của bạn được chấp thuận.</strong>",
            modal_d4_li2: "<i class='fas fa-check-circle'></i> <strong>Tư vấn lộ trình:</strong> Chúng tôi không chỉ giúp bạn có được visa D-4. Chúng tôi cung cấp tư vấn miễn phí về cách chuyển từ visa D-4 sang visa sinh viên (D-2) hoặc làm việc (E-7) trong tương lai.",
            modal_d4_li3: "<i class='fas fa-check-circle'></i> <strong>Lợi ích cho bạn:</strong> Bắt đầu hành trình của bạn tại Hàn Quốc với sự tự tin và một kế hoạch rõ ràng cho tương lai, mà không có gánh nặng tài chính ban đầu cho dịch vụ của chúng tôi.",
        }
    };
  
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    
    const firebaseConfig = {
  apiKey: "AIzaSyAAYnboME3T-XAldqM5Ib882JvcBdkQ25U",
  authDomain: "dlfdk-7c58f.firebaseapp.com",
  projectId: "dlfdk-7c58f",
  storageBucket: "dlfdk-7c58f.firebasestorage.app",
  messagingSenderId: "976050794109",
  appId: "1:976050794109:web:5de2c21ef1072a0f3acb14",
  measurementId: "G-E91HVZSTGX"
};
    
    // --- DOM Elements ---
    const langEnBtn = document.getElementById('lang-en');
    const langViBtn = document.getElementById('lang-vi');
    const header = document.getElementById('header');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navbar = document.getElementById('navbar');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    // --- Functions ---
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        lang === 'vi' ? (langViBtn.classList.add('active'), langEnBtn.classList.remove('active')) : (langEnBtn.classList.add('active'), langViBtn.classList.remove('active'));
    };

    const handleScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    };
    
    const toggleMobileMenu = () => {
        navbar.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    };
    
    navbar.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && navbar.classList.contains('active')) {
            toggleMobileMenu();
        }
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        formStatus.textContent = 'Sending...';
        formStatus.style.color = 'var(--text-color)';

        // Placeholder for when Firebase is not configured
        console.log("Form submitted. To save data, configure Firebase.");
        setTimeout(() => {
            formStatus.textContent = 'Inquiry sent successfully! We will contact you soon.';
            formStatus.style.color = 'var(--secondary-color)';
            contactForm.reset();
        }, 1500);

        // --- Real Firebase Submission Logic (uncomment when configured) ---
        /*
        if (typeof db === 'undefined') {
            console.error("Firebase is not configured.");
            formStatus.textContent = 'Error: Server not configured.';
            formStatus.style.color = 'var(--danger-color)';
            return;
        }
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            facebookId: formData.get('facebook-id'),
            wantVisa: formData.get('want-visa'),
            message: formData.get('message'),
            timestamp: new Date()
        };

        try {
            await addDoc(collection(db, "inquiries"), data);
            formStatus.textContent = 'Inquiry sent successfully! We will contact you soon.';
            formStatus.style.color = 'var(--secondary-color)';
            contactForm.reset();
        } catch (error) {
            console.error("Error adding document: ", error);
            formStatus.textContent = 'An error occurred. Please try again.';
            formStatus.style.color = 'var(--danger-color)';
        }
        */
    };

    // --- Modal Logic ---
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.dataset.modalTarget;
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    const closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    // --- Event Listeners ---
    langEnBtn.addEventListener('click', () => setLanguage('en'));
    langViBtn.addEventListener('click', () => setLanguage('vi'));
    window.addEventListener('scroll', handleScroll);
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    contactForm.addEventListener('submit', handleFormSubmit);

    // --- Initial Setup ---
    setLanguage('en'); 

});
