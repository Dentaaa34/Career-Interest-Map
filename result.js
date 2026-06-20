const scores = JSON.parse(localStorage.getItem("finalScores")) || {};

const labels = {
  realistic: "Praktik",
  investigative: "Analitis",
  artistic: "Kreatif",
  social: "Sosial",
  enterprising: "Persuasif",
  conventional: "Terstruktur",
};

const descriptions = {
  realistic: "Kamu memiliki kecenderungan untuk menyukai aktivitas yang melibatkan penggunaan tangan secara langsung, seperti membuat, merakit, memperbaiki, atau membangun sesuatu. Kamu juga cenderung merasa nyaman ketika bekerja dengan alat, peralatan, maupun mesin yang dioperasikan secara langsung dalam kegiatan sehari-hari. Kamu sering kali menyukai pekerjaan yang bersifat praktis dan dilakukan secara langsung di lapangan, termasuk pekerjaan di luar ruangan. Dalam aktivitasnya, kamu cenderung menikmati kegiatan seperti menggunakan dan mengoperasikan alat serta mesin, merancang dan membangun sesuatu, melakukan perbaikan dan pemeliharaan, bekerja secara manual, serta melakukan pengukuran dan pekerjaan yang membutuhkan ketelitian. Gambaran karier yang mungkin relavan dengan minat kamu mencakup pekerjaan yang berhubungan dengan aktivitas teknis dan keterampilan praktis. Kamu cenderung cocok dengan pekerjaan yang melibatkan pengoperasian alat dan mesin, pembangunan dan perancangan, perbaikan dan pemeliharaan, pekerjaan yang membutuhkan kerja detail dan manual, serta aktivitas seperti mengemudi, bergerak aktif, merawat hewan, dan bekerja dengan tanaman atau lingkungan alam.",

  investigative: "Kamu memiliki kecenderungan untuk menyukai aktivitas yang melibatkan proses menemukan dan meneliti ide, mengamati, menyelidiki, serta bereksperimen dalam memahami suatu hal. Kamu juga senang mengajukan pertanyaan dan berusaha mencari jawaban atas berbagai permasalahan secara mendalam. Kamu cenderung menggunakan kemampuan berpikir analitis dan logis dalam menjalankan aktivitas sehari-hari. Kamu juga nyaman dengan kegiatan seperti menghitung, berkomunikasi baik secara lisan maupun tulisan, merancang dan merumuskan ide, melakukan perhitungan, mendiagnosis suatu masalah, serta melakukan eksperimen dan penyelidikan secara sistematis. Gambaran karier yang mungkin relevan dengan minat kamu mencakup pekerjaan yang berhubungan dengan kegiatan penelitian, analisis, dan pemecahan masalah. Kamu juga cenderung cocok pada pekerjaan yang membutuhkan kemampuan berpikir kritis dan logis, seperti merancang, merumuskan, menghitung, serta menganalisis data atau fenomena. Selain itu, kamu juga sesuai dengan pekerjaan yang melibatkan proses diagnosis, eksperimen, serta penyelidikan untuk menemukan solusi yang tepat dan berbasis data.",

  social: "Kamu memiliki kecenderungan untuk menyukai aktivitas yang berkaitan dengan mengajar, melatih, memberi informasi, serta membantu dan melayani orang lain. Kamu cenderung peduli terhadap kesejahteraan diri sendiri maupun orang lain, serta merasa nyaman ketika dapat berkontribusi secara langsung dalam membantu perkembangan atau permasalahan orang lain. Kamu juga memiliki kemampuan dan minat dalam berkomunikasi baik secara lisan maupun tulisan. Dalam aktivitas sehari-hari, kamu cenderung menikmati kegiatan seperti memberi dukungan, melatih, bertemu dan menyapa orang lain, membantu, mengajar, memberikan informasi, serta melakukan wawancara dan pendampingan. Gambaran karier yang mungkin relevan dengan minat kamu mencakup pekerjaan yang berhubungan dengan pelayanan, pendidikan, dan pendampingan. Kamu cenderung cocok dengan pekerjaan yang melibatkan interaksi sosial tinggi, seperti mengajar, melatih, konseling, memberikan informasi, serta membantu orang lain dalam mengembangkan diri atau menyelesaikan masalah. Selain itu, kamu juga sesuai dengan pekerjaan yang berfokus pada pelayanan dan peningkatan kesejahteraan orang lain secara langsung.",
  artistic: "Kamu memiliki kecenderungan untuk menyukai aktivitas yang melibatkan penggunaan kata-kata, seni, musik, atau drama sebagai sarana untuk berkomunikasi, mengekspresikan diri, serta menciptakan dan merancang sesuatu. Kamu cenderung merasa nyaman ketika dapat menuangkan ide dan perasaan melalui bentuk ekspresi yang kreatif. Kamu juga memiliki kecenderungan untuk mengekspresikan diri secara artistik maupun fisik melalui berbagai aktivitas seperti berbicara, menulis, menyanyi, tampil di depan orang lain, merancang sesuatu, menyajikan ide, serta menyusun konsep. Selain itu, kamu juga menyukai aktivitas yang melibatkan permainan peran, menari, dan berbagai bentuk ekspresi kreatif lainnya. Gambaran karier yang mungkin relevan dengan minat kamu mencakup pekerjaan yang berhubungan dengan bidang seni, komunikasi, dan kreativitas. Kamu cenderung cocok dengan pekerjaan seperti menulis, membuat karya seni, menyanyi, berakting, mendesain, serta merancang pertunjukan atau karya kreatif lainnya. Selain itu, kamu juga sesuai dengan pekerjaan yang memberi ruang untuk berekspresi, berimajinasi, serta menyampaikan ide melalui berbagai media kreatif.",
  enterprising: "kamu memiliki kecenderungan untuk menyukai aktivitas yang melibatkan interaksi dengan banyak orang, seperti bertemu, berbicara, memimpin, serta mempengaruhi orang lain. Kamu cenderung nyaman berada dalam situasi sosial yang dinamis dan merasa tertantang untuk mendorong atau meyakinkan orang lain terhadap suatu ide atau tujuan. Kamu juga memiliki minat dalam kegiatan yang berkaitan dengan dunia bisnis, seperti menjual, mempromosikan, serta membujuk orang lain. Dalam menjalankan aktivitasnya, kamu cenderung mengembangkan ide-ide, berbicara di depan umum, mengelola dan mengatur suatu kegiatan, serta mengambil peran sebagai pemimpin. Selain itu, kamu juga memiliki kemampuan dalam merencanakan, menghitung, dan mengorganisasi berbagai hal untuk mencapai tujuan tertentu. Gambaran karier yang mungkin relevan dengan minat kamu mencakup pekerjaan yang berhubungan dengan kepemimpinan, bisnis, dan kewirausahaan. Kamu cenderung cocok dengan pekerjaan yang melibatkan aktivitas seperti memimpin tim, mengelola organisasi, melakukan penjualan dan pemasaran, berbicara di depan umum, serta mengembangkan dan menjalankan ide-ide bisnis secara aktif dan persuasif.",
  conventional: "Kamu memiliki kecenderungan untuk menyukai aktivitas yang dilakukan di dalam ruangan dengan tugas-tugas yang terstruktur, rapi, dan mengikuti prosedur yang jelas. Kamu cenderung merasa nyaman dengan pekerjaan yang melibatkan pengorganisasian, ketelitian, serta akurasi dalam menyelesaikan tugas. Kamu juga memiliki minat pada aktivitas yang berhubungan dengan data atau angka, seperti melakukan perhitungan, mengelola informasi, serta bekerja dengan sistem administrasi yang teratur. Dalam keseharian, kamu cenderung menyukai pekerjaan seperti mencatat dan menyimpan data, mengoperasikan komputer (komputasi dan keyboarding), menangani uang, serta mengatur berbagai dokumen atau kegiatan secara sistematis. Gambaran karier yang mungkin relevan dengan minat kamu mencakup pekerjaan yang membutuhkan ketelitian, kedisiplinan, dan kemampuan organisasi yang baik. Kamu cenderung cocok dengan pekerjaan yang melibatkan administrasi, pengelolaan data, keuangan, perencanaan, serta tugas-tugas yang membutuhkan fokus pada detail dan kepatuhan terhadap prosedur yang sudah ditetapkan."
  };

const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);

const topContainer = document.getElementById("topTalentContainer");

const top1 = sortedScores[0];
const top2 = sortedScores[1];
const top3 = sortedScores[2];
const top4 = sortedScores[3];
const top5 = sortedScores[4];
const top6 = sortedScores[5];

const maxScore = 60;

[top1, top2, top3, top4, top5, top6].forEach((item) => {
  const percent = Math.round((item[1] / maxScore) * 100);

  topContainer.innerHTML += `

    <div class="group">

      <div class="flex justify-between mb-xs">

        <span class="font-label-bold text-on-surface">
          ${labels[item[0]]}
        </span>

        <span class="font-label-bold text-primary">
          ${percent}%
        </span>

      </div>

      <div
        class="h-3 w-full progress-track rounded-full overflow-hidden"
      >

        <div
          class="h-full progress-fill rounded-full"
          style="width:${percent}%"
        ></div>

      </div>

    </div>

  `;
});

document.getElementById("superpowerTitle").innerText =
  `Minat utama: "${labels[top1[0]]}"`;

document.getElementById("superpowerDesc").innerText = descriptions[top1[0]];
// Interpretasi skor tertinggi kedua
document.getElementById("secondaryTitle").innerText =
  `Minat Pendukung 1: ${labels[top2[0]]}`;

document.getElementById("secondaryDesc").innerText =
  descriptions[top2[0]];

// Interpretasi skor tertinggi ketiga
document.getElementById("thirdTitle").innerText =
  `Minat Pendukung 2: ${labels[top3[0]]}`;

document.getElementById("thirdDesc").innerText =
  descriptions[top3[0]];