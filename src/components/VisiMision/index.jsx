"use client";

import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

const DataImg = [
  {
    nama: "Laily Farhatani",
    img_url: "/juara/Laily Farhatani.jpg",
    kelas: 9,
    lomba: [
      {
        nama: "MHQ di SMA Yadika 13",
        prestasi: "Harapan 2",
        tingkat: "Kabupaten",
        tahun: 2022,
      },
    ],
    motivasi: "Teruslah berusaha dan jangan pernah menyerah.",
  },
  {
    nama: "Sumayyah Hafidzah",
    img_url: "/juara/Sumayyah Hafidzoh.jpg",
    kelas: 8,
    lomba: [
      {
        nama: "MHQ di SMA Yadika 13",
        prestasi: "Harapan 3",
        tingkat: "Kabupaten",
        tahun: 2022,
      },
      {
        nama: "MHQ Tingkat SMP-SMA di Masjid Al Muhajirin SKU",
        prestasi: "Juara 3",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
      {
        nama: "MHQ Tingkat SMP-SMA di Masjid Al Muhajirin SKU",
        prestasi: "Juara 1",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
    ],
    motivasi: "Tetap rendah hati dan terus belajar dari setiap pengalaman.",
  },
  {
    nama: "Najla Shafa Salsabila",
    img_url: "/juara/Najla Shafa Salsabila.jpg",
    kelas: 12,
    lomba: [
      {
        nama: "Ekshibisi Thifan Nasional Ke-18 di Bandung",
        prestasi: "Juara 1",
        tingkat: "Nasional",
        tahun: 2022,
      },
    ],
    motivasi: "Setiap tantangan adalah kesempatan untuk menjadi lebih baik.",
  },
  {
    nama: "Putri Ramadhani Siagian",
    img_url: "/juara/Putri Ramadhani Siagian.jpg",
    kelas: 12,
    lomba: [
      {
        nama: "Pidato Bahasa Arab di Teras Quran Festival",
        prestasi: "Juara 2",
        tingkat: "Jabodetabek",
        tahun: 2022,
      },
      {
        nama: "Pidato di IPNU Cikarang Barat",
        prestasi: "Juara 1",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
      {
        nama: "Pidato Bahasa Arab Tingkat Pesantren di PORSENI",
        prestasi: "Juara 2",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
      {
        nama: "Dai Tingkat SMA di SMAN 2 Tambun Selatan",
        prestasi: "Juara 2",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
      {
        nama: "Baca Kitab di MQK Tingkat Marhalah 'Ulya",
        prestasi: "Juara 3",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
    ],
    motivasi:
      "Percaya pada dirimu sendiri, kamu lebih kuat dari yang kamu pikirkan.",
  },
  {
    nama: "Sabrina Alifah",
    img_url: "/juara/Sabrina Alifah.jpg",
    kelas: 12,
    lomba: [
      {
        nama: "MHQ di Teras Quran Festival",
        prestasi: "Harapan 2",
        tingkat: "Jabodetabek",
        tahun: 2022,
      },
      {
        nama: "MHQ Tingkat SMP-SMA di Masjid Al Muhajirin SKU",
        prestasi: "Juara 2",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
    ],
    motivasi: "Kunci kesuksesan adalah konsistensi dan ketekunan.",
  },
  {
    nama: "Mu'afa Zahroh Maulida",
    img_url: "/juara/Mu'Afa Zahro Maulida.jpg",
    kelas: 9,
    lomba: [
      {
        nama: "Lomba Story Telling Tingkat SMP di Festival Ramadhan 1444 H MTTG",
        prestasi: "Juara 1",
        tingkat: "Nasional",
        tahun: 2024,
      },
    ],
    motivasi: "Jangan pernah takut gagal, karena dari kegagalan kita belajar.",
  },
  {
    nama: "Afifah Candy Ammardiyanti",
    img_url: "/juara/Afiifah Candy Ammardiyanti.jpg",
    kelas: 9,
    lomba: [
      {
        nama: "Lomba Story Telling Tingkat SMP di Festival Ramadhan 1444 H MTTG",
        prestasi: "Harapan",
        tingkat: "Nasional",
        tahun: 2024,
      },
    ],
    motivasi: "Kesuksesan bukanlah akhir, kegagalan bukanlah kejatuhan.",
  },
  {
    nama: "Shabina Nasya Shohwatul Islami",
    img_url: "/juara/Shabina Nasya Shohwatul Islami.jpg",
    kelas: 11,
    lomba: [
      {
        nama: "MHQ Tingkat SMP-SMA di Masjid Al Muhajirin SKU",
        prestasi: "Juara 1",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
    ],
    motivasi: "Setiap usaha akan membuahkan hasil yang manis pada waktunya.",
  },
  {
    nama: "Nabilah Izdihar Alifah",
    img_url: "/juara/Nabilah Izdihar Alifah.jpg",
    kelas: 10,
    lomba: [
      {
        nama: "MHQ Tingkat SMP-SMA di Masjid Al Muhajirin SKU",
        prestasi: "Juara 3",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
      {
        nama: "MHQ Tingkat SMA di SMAN 2 Tambun Selatan",
        prestasi: "Juara 3",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
    ],
    motivasi: "Hidup adalah sebuah proses, nikmati dan teruslah belajar.",
  },
  {
    nama: "Kayla Aulia Putri Laksamana",
    img_url: "/juara/Kayla Aulia Putri Laksamana.jpg",
    kelas: 9,
    lomba: [
      {
        nama: "Cerita Nabi Tingkat SMP di SMA Yadika 13",
        prestasi: "Juara 2",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
      {
        nama: "Pidato Bahasa Inggris Tingkat Pesantren di PORSENI",
        prestasi: "Juara 2",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
    ],
    motivasi:
      "Keberanian untuk memulai adalah langkah pertama menuju kesuksesan.",
  },
  {
    nama: "Keiza Nazwa Novema",
    img_url: "/juara/Keiza Nazwa Novema.jpg",
    kelas: 9,
    lomba: [
      {
        nama: "Kaligrafi Tingkat SMP di SMA Yadika 13",
        prestasi: "Harapan 1",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
      {
        nama: "Cabang Lomba Kaligrafi di SMK Bina Karya Mandiri",
        prestasi: "Juara 2",
        tingkat: "Jabodetabek",
        tahun: 2025,
      },
    ],
    motivasi:
      "Setiap karya seni adalah refleksi dari ketekunan dan kreativitas.",
  },
  {
    nama: "Khalitsa Althafunnisa Rana El Imani",
    img_url: "/juara/Khalitsa Al Thafunnisa Rana El Imani.jpg",
    kelas: 8,
    lomba: [
      {
        nama: "Dai Tingkat SMP di SMA Yadika 13",
        prestasi: "Harapan 3",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
    ],
    motivasi:
      "Bersabar dan bersyukur adalah kunci menghadapi setiap tantangan.",
  },
  {
    nama: "Ghoida Muthmainnah",
    img_url: "/juara/gd.jpg",
    kelas: 9,
    lomba: [
      {
        nama: "Rangking 1 Tingkat SMP di SMK Kesehatan Zamzam Kurnia",
        prestasi: "Juara 2",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
    ],
    motivasi: "Kedisiplinan adalah jalan menuju prestasi yang lebih tinggi.",
  },
  {
    nama: "Anisa Ardiana Nur Khoiriyah",
    img_url: "/juara/Anisa Ardiana Nur Khoiriyah.jpg",
    kelas: 7,
    lomba: [
      {
        nama: "Dai Tingkat SMP di Pesantren Terpadu Daarul Fikri",
        prestasi: "Juara 3",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
    ],
    motivasi: "Keikhlasan dalam berjuang membawa hasil yang berkah.",
  },
  {
    nama: "Khairunnisa",
    img_url: "/juara/Khairunnisa.jpg",
    kelas: 8,
    lomba: [
      {
        nama: "Dai Tingkat SMP di Pesantren Terpadu Daarul Fikri",
        prestasi: "Harapan 3",
        tingkat: "Kabupaten",
        tahun: 2024,
      },
    ],
    motivasi: "Jangan takut berbuat salah, karena dari kesalahan kita belajar.",
  },
];

const VisiMision = () => {
  const [logData, setLogData] = useState(5);

  const currentChampion = (param) => {
    setLogData(param);
  };

  return (
    <div className="min-h-dvh flex justify-center items-center bg-color-secondary max-xl:py-10 max-xl:px-2">
      <div className="w-10/12  flex  max-xl:flex-col-reverse max-xl:gap-5">
        {/* Visionn mISSION */}
        <div className="xl:w-1/2 w-full xl:pe-20 max-xl:mt-10">
          <p className="text-5xl font-bold text-color-primary ">Our Champion</p>
          <div className="w-20 h-1 rounded-xl mt-1 mb-5 xl:mb-14 bg-color-primary"></div>
          <div className="flex gap-4 flex-col">
            <OurChampion logData={logData} />
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-7 xl:grid-cols-5  gap-4 mt-2">
              {DataImg.map((cb, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => currentChampion(index)}
                    className="cursor-pointer"
                  >
                    <Image
                      height={1000}
                      width={1000}
                      src={cb.img_url}
                      className="min-h-20 max-w-20 max-h-20 min-w-20 object-cover  max-[360px]:min-h-16 max-[360px]:max-w-16 max-[360px]:max-h-16 max-[360px]:min-w-16 aspect-square rounded-lg bg-color-primary"
                      alt={cb.img_url}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {/* Collapse */}
        <div className="xl:w-1/2 w-full ">
          <div>
            <p className="text-5xl font-bold text-color-primary ">Our Vision</p>
            <div className="w-20 h-1 rounded-xl mt-1 mb-5 bg-color-primary"></div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow text-color-primary border-color-primary border-2 mb-5"
            >
              <div className="collapse-title text-xl font-medium">
                Build Quality Generation
              </div>
              <div className="collapse-content">
                <p>
                  Mencetak generasi Rabbani, berkarakter Qur’ani, Kreatif,
                  Berwawasan luas dengan konsep Pendidikan yang berkeadilan
                </p>
              </div>
            </div>
          </div>

          <p className="text-5xl font-bold text-color-primary max-xl:mt-10">
            Our Mission
          </p>
          <div className="w-20 h-1 rounded-xl mt-1 mb-5 bg-color-primary"></div>
          {/* tableDaisy */}
          <div className="collapse text-color-primary collapse-arrow border-2 border-color-primary mt-2">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Pendidikan Al-Qur'an
            </div>
            <div className="collapse-content">
              <p>
                Menjadikan Al-qur’an dan As-sunnah sebagai landasan dasar dalam
                seluruh aspek pendidikan.
              </p>
            </div>
          </div>
          <div className="collapse text-color-primary collapse-arrow border-2 border-color-primary mt-2.5">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Islamic Curiculum
            </div>
            <div className="collapse-content">
              <p>
                Menyelenggarakan pendidikan dengan muatan kurikulum ilmu
                keislaman yang komprehensif dipadukan dengan muatan kurikulum
                pendidikan nasional.
              </p>
            </div>
          </div>
          <div className="collapse text-color-primary collapse-arrow border-2 border-color-primary mt-2.5">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Build Character
            </div>
            <div className="collapse-content">
              <p>
                Menyelenggaran pendidikan dengan basis pembentukan karakter
                islami dan pengamalan nilai-nilai qurani.
              </p>
            </div>
          </div>
          <div className="collapse text-color-primary collapse-arrow border-2 border-color-primary mt-2.5">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Creative with art
            </div>
            <div className="collapse-content">
              <p>
                Terbentuknya santri yang mempunyai daya kreatifitas multi
                talenta dan kemampuan dalam melahirkan karya tulis dan karya
                jurnalistik.
              </p>
            </div>
          </div>
          <div className="collapse text-color-primary collapse-arrow border-2 border-color-primary mt-2.5">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              English and Arab Languange
            </div>
            <div className="collapse-content">
              <p>
                Menjadikan bahasa arab dan bahasa inggris sebagai bahasa
                sehari-hari.
              </p>
            </div>
          </div>
          <div className="collapse text-color-primary collapse-arrow border-2 border-color-primary mt-2.5">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Give Opportunity to Yatim and Dhua'fa
            </div>
            <div className="collapse-content">
              <p>
                Memberi kesempatan kepada yatim dan dhu’afa untuk merasakan
                pendidikan yang berkualitas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMision;

const OurChampion = ({ title, desc, writer, logData }) => {
  return (
    <div className="flex-col max-sm:mt-2 flex max-sm:gap-2 gap-4 text-color-primary">
      <p className="text-2xl font-bold">
        {DataImg[logData].lomba[0].prestasi} Tingkat{" "}
        {DataImg[logData].lomba[0].tingkat} {DataImg[logData].lomba[0].nama}
      </p>
      <p className="text-base">{DataImg[logData].motivasi}</p>
      <p className="text-base"> -{DataImg[logData].nama}</p>
    </div>
  );
};
