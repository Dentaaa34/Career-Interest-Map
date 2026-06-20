const sections = [
  // SECTION 1
  [
    {
      type: "realistic",
      question:
        "Saya tertarik mencoba kegiatan yang melibatkan praktik langsung dibanding hanya teori.",
    },
    {
      type: "investigative",
      question:
        "Saya tertarik memahami alasan atau penyebab dari suatu kejadian.",
    },
    {
      type: "artistic",
      question:
        "Saya senang mencoba membuat sesuatu yang unik menggunakan ide saya sendiri.",
    },
    {
      type: "social",
      question:
        "Saya ingin membantu ketika melihat teman yang sedang mengalami kesulitan.",
    },
    {
      type: "enterprising",
      question:
        "Saat kerja kelompok, saya tertarik menjadi orang yang mengatur jalannya diskusi atau kegiatan.",
    },
    {
      type: "conventional",
      question:
        "Saya merasa nyaman mengerjakan tugas yang berkaitan dengan pencatatan atau pengelolaan data.",
    },
  ],

  // SECTION 2
  [
    {
      type: "realistic",
      question:
        "Saya senang mempelajari cara menggunakan alat atau perangkat tertentu.",
    },
    {
      type: "investigative",
      question:
        "Saya senang mempelajari hal baru yang berkaitan dengan pengetahuan atau ilmu tertentu.",
    },
    {
      type: "artistic",
      question:
        "Saya suka mengekspresikan perasaan atau ide melalui karya kreatif.",
    },
    {
      type: "social",
      question:
        "Saat ada kegiatan yang bertujuan membantu orang lain, saya tertarik untuk ikut terlibat.",
    },
    {
      type: "enterprising",
      question:
        "Saya senang ketika diberi kesempatan menentukan keputusan dalam suatu kegiatan bersama.",
    },
    {
      type: "conventional",
      question:
        "Saya tertarik pada kegiatan yang mengharuskan dokumen atau informasi disusun dengan rapi.",
    },
  ],

  // SECTION 3
  [
    {
      type: "realistic",
      question:
        "Saya merasa tertarik pada kegiatan yang menggunakan alat, mesin, atau peralatan kerja.",
    },
    {
      type: "investigative",
      question:
        "Saya tertarik mencari informasi dari berbagai sumber untuk memahami suatu masalah.",
    },
    {
      type: "artistic",
      question:
        "Saya merasa lebih nyaman menyampaikan ide dengan cara yang kreatif dan berbeda.",
    },
    {
      type: "social",
      question:
        "Saya merasa nyaman berbicara dan berkenalan dengan orang baru.",
    },
    {
      type: "enterprising",
      question:
        "Saya merasa senang ketika berhasil meyakinkan orang lain terhadap ide yang saya sampaikan.",
    },
    {
      type: "conventional",
      question:
        "Saya lebih nyaman mengerjakan tugas dengan langkah kerja yang jelas dan teratur.",
    },
  ],

  // SECTION 4
  [
    {
      type: "realistic",
      question:
        "Saya senang mengamati cara kerja alat atau benda yang digunakan dalam suatu pekerjaan.",
    },
    {
      type: "investigative",
      question:
        "Saat menemukan topik yang menarik, saya ingin mencari tahu lebih dalam tentang topik tersebut.",
    },
    {
      type: "artistic",
      question:
        "Saya sering membayangkan ide atau konsep baru dalam suatu kegiatan.",
    },
    {
      type: "social",
      question:
        "Saya menikmati kegiatan yang mengharuskan saya bekerja dan berkomunikasi dengan banyak orang.",
    },
    {
      type: "enterprising",
      question:
        "Saat berdiskusi, saya berusaha menyampaikan pendapat dengan percaya diri agar orang lain memahami maksud saya.",
    },
    {
      type: "conventional",
      question:
        "Saya menyukai kegiatan yang memiliki jadwal dan aturan kerja yang pasti.",
    },
  ],

  // SECTION 5
  [
    {
      type: "realistic",
      question:
        "Saya lebih tertarik terlibat langsung di lapangan dibanding hanya melihat dari jauh.",
    },
    {
      type: "investigative",
      question:
        "Saya tertarik mempelajari konsep atau teori yang menjelaskan bagaimana sesuatu dapat terjadi.",
    },
    {
      type: "artistic",
      question:
        "Saya senang memikirkan cara yang berbeda dan tidak biasa untuk membuat sesuatu.",
    },
    {
      type: "social",
      question:
        "Saya tertarik membantu teman memahami pelajaran yang belum mereka mengerti.",
    },
    {
      type: "enterprising",
      question:
        "Saya tertarik mengikuti kegiatan yang berhubungan dengan bisnis atau jual beli.",
    },
    {
      type: "conventional",
      question:
        "Saya terbiasa memeriksa kembali tugas agar tidak ada kesalahan kecil yang terlewat.",
    },
  ],

  // SECTION 6
  [
    {
      type: "realistic",
      question:
        "Saya menyukai kegiatan yang dilakukan langsung di lokasi kerja atau praktik.",
    },
    {
      type: "investigative",
      question:
        "Saya menikmati pelajaran yang mengajak berpikir logis dan memahami hubungan antar konsep.",
    },
    {
      type: "artistic",
      question:
        "Saya tertarik membuat karya yang memiliki ciri khas atau gaya sendiri.",
    },
    {
      type: "social",
      question:
        "Ketika teman memiliki masalah, saya berusaha mendengarkan dan memberi dukungan kepada mereka.",
    },
    {
      type: "enterprising",
      question:
        "Saya senang mencari ide kegiatan atau usaha yang dapat menghasilkan keuntungan.",
    },
    {
      type: "conventional",
      question:
        "Saya memperhatikan detail saat mengerjakan tugas atau mengisi data tertentu.",
    },
  ],

  // SECTION 7
  [
    {
      type: "realistic",
      question:
        "Saat ada alat atau benda yang bermasalah, saya tertarik mencari tahu penyebabnya.",
    },
    {
      type: "investigative",
      question:
        "Saya senang membaca informasi atau artikel yang menambah wawasan baru bagi saya.",
    },
    {
      type: "artistic",
      question:
        "Saya merasa puas ketika berhasil menghasilkan sesuatu dari ide pribadi saya.",
    },
    {
      type: "social",
      question:
        "Saya ikut merasa sedih ketika melihat orang lain mengalami kesulitan.",
    },
    {
      type: "enterprising",
      question:
        "Saya merasa cukup percaya diri saat berbicara di depan kelas atau banyak orang.",
    },
    {
      type: "conventional",
      question:
        "Saya berusaha mengikuti aturan yang berlaku saat mengerjakan suatu tugas atau kegiatan.",
    },
  ],

  // SECTION 8
  [
    {
      type: "realistic",
      question:
        "Saya senang mencoba menemukan cara memperbaiki masalah pada alat atau perangkat tertentu.",
    },
    {
      type: "investigative",
      question:
        "Saya tertarik mencari pengetahuan baru tentang topik yang membuat saya penasaran.",
    },
    {
      type: "artistic",
      question:
        "Saya memperhatikan warna, bentuk, atau tampilan agar terlihat menarik.",
    },
    {
      type: "social",
      question:
        "Saya berusaha memahami perasaan teman ketika dia bercerita kepada saya.",
    },
    {
      type: "enterprising",
      question:
        "Saya nyaman memperkenalkan diri dan berinteraksi dengan orang baru dalam suatu kegiatan.",
    },
    {
      type: "conventional",
      question:
        "Saya merasa lebih nyaman bekerja sesuai aturan yang sudah ditentukan.",
    },
  ],

  // SECTION 9
  [
    {
      type: "realistic",
      question:
        "Saya nyaman melakukan kegiatan yang membutuhkan keterampilan tangan dan koordinasi tubuh.",
    },
    {
      type: "investigative",
      question:
        "Saya merasa tertarik pada kegiatan yang melibatkan perhitungan, data, atau eksperimen.",
    },
    {
      type: "artistic",
      question:
        "Saya senang menata sesuatu supaya terlihat lebih indah dan nyaman dilihat.",
    },
    {
      type: "social",
      question: "Saya semangat mengerjakan tugas yang sifatnya berkelompok.",
    },
    {
      type: "enterprising",
      question:
        "Saya merasa termotivasi untuk mencapai hasil yang lebih baik dibanding sebelumnya.",
    },
    {
      type: "conventional",
      question:
        "Saya merasa senang mengatur atau memeriksa dokumen dengan teliti.",
    },
  ],

  // SECTION 10
  [
    {
      type: "realistic",
      question:
        "Saya menikmati aktivitas yang melibatkan praktik langsung menggunakan tangan atau alat kerja.",
    },
    {
      type: "investigative",
      question:
        "Saya menikmati pelajaran yang berkaitan dengan matematika atau sains.",
    },
    {
      type: "artistic",
      question:
        "Saya lebih nyaman mengerjakan tugas dengan cara yang bebas dan tidak terlalu kaku.",
    },
    {
      type: "social",
      question:
        "Saat kerja kelompok, saya senang bekerja sama agar semua anggota dapat menyelesaikan tugas dengan baik.",
    },
    {
      type: "enterprising",
      question:
        "Saya senang mengikuti kegiatan yang menantang kemampuan saya untuk mencapai prestasi tertentu.",
    },
    {
      type: "conventional",
      question:
        "Saya menyukai lingkungan kerja atau belajar yang tertata dan terorganisasi dengan baik.",
    },
  ],

  // SECTION 11
  [
    {
      type: "realistic",
      question:
        "Saya lebih menyukai kegiatan yang hasilnya dapat langsung dilihat secara nyata.",
    },
    {
      type: "investigative",
      question:
        "Saya senang mengikuti kegiatan yang mengajak berpikir dan memecahkan masalah.",
    },
    {
      type: "artistic",
      question:
        "Saya menyukai kegiatan yang memberi kesempatan untuk berkreasi sesuai gaya sendiri.",
    },
    {
      type: "social",
      question:
        "Saya tertarik mengikuti kegiatan sosial atau pengabdian di lingkungan rumah ataupun sekolah.",
    },
    {
      type: "enterprising",
      question:
        "Saya tertarik menyusun rencana agar suatu kegiatan dapat berjalan dengan baik.",
    },
    {
      type: "conventional",
      question:
        "Saya merasa lebih nyaman ketika kegiatan berjalan sesuai rencana yang sudah disusun sebelumnya.",
    },
  ],

  // SECTION 12
  [
    {
      type: "realistic",
      question:
        "Saya merasa lebih nyaman mengerjakan aktivitas yang jelas dan dapat dipraktikkan secara langsung.",
    },
    {
      type: "investigative",
      question:
        "Saya tertarik pada aktivitas yang membutuhkan analisis dan pemahaman mendalam terhadap suatu topik.",
    },
    
    {
      type: "social",
      question:
        "Saya senang terlibat dalam kegiatan sekolah yang bertujuan membantu masyarakat atau orang lain.",
    },
    {
      type: "enterprising",
      question:
        "Saat ada kegiatan bersama, saya senang membantu mengatur tugas dan koordinasi anggota kelompok.",
    },
    
  ],
];
