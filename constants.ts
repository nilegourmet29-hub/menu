import type { MenuCategory } from './types';

export const menuData: MenuCategory[] = [
    {
        category_ar: "الشوربة",
        category_en: "Soups",
        items: [
            { name_ar: "شوربة عدس", name_en: "Lentil Soup", price: 15, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758212058/download_xkvw71.png"] },
            { name_ar: "شوربة لسان عصفور", name_en: "Orzo Soup", price: 15, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758211980/download_bhqmdq.png"] },
            { name_ar: "شوربة كوارع", name_en: "Trotters Soup", price: 25, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758212192/download_xud81g.png"] }
        ]
    },
    {
        category_ar: "السلطات",
        category_en: "Salads",
        items: [
            { name_ar: "سلطة بلدي", name_en: "Baladi Salad", price: 15, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758212999/download_kj8jxo.png"] },
            { name_ar: "حمص", name_en: "Hummus", price: 20, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758212671/imgi_43_15978-41124202338200564_wkjvm4.png"] },
            { name_ar: "بابا غنوج", name_en: "Baba Ghanoush", price: 20, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758213084/download_ywwxwg.png"] },
            { name_ar: "طحينة", name_en: "Tahini", price: 18, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758213198/download_vhpolb.png"] },
            { name_ar: "تومية", name_en: "Toum", price: 18, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758213264/download_i8cq7x.png"] }
        ]
    },
    {
        category_ar: "مقبلات ساخنة",
        category_en: "Hot Appetizers",
        items: [
            { name_ar: "سجق إسكندراني", name_en: "Alexandrian Sausage", price: 31.99, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758214918/download_isyden.png"] },
            { name_ar: "كبدة إسكندراني", name_en: "Alexandrian Liver", price: 31.99, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758215178/download_nhisou.png"] },
            { name_ar: "فراخ محمرة 1/4", name_en: "1/4 Fried Chicken", price: 15, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758214933/15978-51224223018027679_ebn3kf.webp"] },
            { name_ar: "بطاطس مقلية", name_en: "French Fries", price: 15, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758215450/download_xdmkjy.png"] }
        ]
    },
    {
        category_ar: "المحاشي",
        category_en: "Mahashi",
        items: [
            { name_ar: "ممبار", name_en: "Mombar", price: 40, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758217347/download_etrqdr.png"] },
            { name_ar: "ورق عنب", name_en: "Grape Leaves", price: 30, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758217807/1758217779259-c6548705-f4a7-441e-8a01-8e0cc94154b2_mkkcjd.png"] },
            { name_ar: "محشي كرنب", name_en: "Stuffed Cabbage", price: 30, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758230651/download_mffyqj.png"] },
            { name_ar: "محاشي مشكلة", name_en: "Mixed Mahashi", price: 40, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758231036/download_rxjmxo.png"] },
            { name_ar: "محاشي مشكلة 1 كيلو", name_en: "Mixed Mahashi 1 KG", price: 70, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758231036/download_rxjmxo.png"] }
        ]
    },
    {
        category_ar: "أطباق النيل المميزة",
        category_en: "Nile Specialties Dishes",
        items: [
            { name_ar: "مكرونة بشاميل", name_en: "Béchamel Pasta", price: 35, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758233040/download_mkeojk.png"] },
            { name_ar: "معكرونة بالسجق الشرقي", name_en: "Pasta with Oriental Sausage", price: 35, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758232359/a-delicious-plate-of-penne-pasta-with-small-browned-sausage-links-or-kofta-and-a-rich-reddish-o_qrjgwp.jpg"] },
            { name_ar: "رقاق باللحم المفروم", name_en: "Minced Meat Ragaq", price: 30, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758233255/download_rt9scg.png"] },
            { name_ar: "إسكالوب دجاج", name_en: "Chicken Escalope", price: 35, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758233232/download_apsox1.png"] },
            { name_ar: "فتة بمكعبات لحم بقري", name_en: "Fattah with Beef Cubes", price: 55, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758234012/download_dc4ob6.png"] },
            { name_ar: "فتة موزة ضاني", name_en: "Fattah with Lamb Shank", price: 60, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758239802/download_kxlwrm.png"] },
            { name_ar: "فتة مع كوارع", name_en: "Fattah with Trotters", price: 55, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758240078/download_sdgmlo.png"] },
            { name_ar: "دجاجة كاملة محشوة بالأرز", name_en: "Whole Chicken Stuffed with Rice", price: 50, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758245816/1758245576132-13ebc597-cc02-43ca-8a98-bef880dcbe34_dego1c.png"] },
            { name_ar: "حمام محشو بالأرز", name_en: "Stuffed Pigeon with Rice", sizes: [{ size_ar: "حبة واحدة", size_en: "One Piece", price: 55 }, { size_ar: "حبّتان", size_en: "Two Pieces", price: 105 }], image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758245163/download_vnhjtg.png"] },
            { name_ar: "حمام محشو بالفريك", name_en: "Stuffed Pigeon with Freek", sizes: [{ size_ar: "حبة واحدة", size_en: "One Piece", price: 55 }, { size_ar: "حبّتان", size_en: "Two Pieces", price: 110 }], image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758244835/download_oy6ck8.png"] },
            { name_ar: "نصف بطة مع محاشي", name_en: "Half Duck with Mahashi", price: 110, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758244657/download_ddq4r5.png"] },
            { name_ar: "نصف بطة مشوية بالفرن", name_en: "Half Roasted Duck", price: 100, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758246442/1758246389605-824ec4c2-7684-498f-b5f5-8b9d7a59c562_dbgojv.png"] },
            { name_ar: "كتف ضأني بالفرن", name_en: "Baked Lamb Shoulder", price: 200, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758246442/1758246389605-824ec4c2-7684-498f-b5f5-8b9d7a59c562_dbgojv.png"] }
        ]
    },
    {
        category_ar: "المشويات",
        category_en: "Grills",
        items: [
            { name_ar: "كباب", name_en: "Kebab", sizes: [{ size_ar: "طلب", size_en: "Order", price: 59 }, { size_ar: "نص كيلو", size_en: "Half KG", price: 87.50 }, { size_ar: "كيلو", size_en: "KG", price: 175 }], image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758265757/download_bqkqlu.png"] },
            { name_ar: "كفتة", name_en: "Kofta", sizes: [{ size_ar: "طلب", size_en: "Order", price: 55 }, { size_ar: "نص كيلو", size_en: "Half KG", price: 80.00 }, { size_ar: "كيلو", size_en: "KG", price: 160 }], image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758267392/download_byezhp.png"] },
            { name_ar: "ريش ضاني مشوية", name_en: "Grilled Lamb Chops", sizes: [{ size_ar: "طلب", size_en: "Order", price: 60 }, { size_ar: "نص كيلو", size_en: "Half KG", price: 92.50 }, { size_ar: "كيلو", size_en: "KG", price: 185 }], image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758267814/download_xjox95.png"] },
            { name_ar: "طرب", name_en: "Tarab", sizes: [{ size_ar: "طلب", size_en: "Order", price: 55 }, { size_ar: "نص كيلو", size_en: "Half KG", price: 82.50 }, { size_ar: "كيلو", size_en: "KG", price: 165 }], image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758267760/download_aamaex.png"] },
            { name_ar: "شيش طاووق", name_en: "Shish Tawook", sizes: [{ size_ar: "طلب", size_en: "Order", price: 50 }, { size_ar: "نص كيلو", size_en: "Half KG", price: 62.50 }, { size_ar: "كيلو", size_en: "KG", price: 125 }], image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758268232/download_wxhzix.png"] },
            { name_ar: "مشاوي مشكلة النيل جورميه", name_en: "Nile Gourmet Mixed Grills", sizes: [{ size_ar: "طلب", size_en: "Order", price: 59 }, { size_ar: "نص كيلو", size_en: "Half KG", price: 87.50 }, { size_ar: "كيلو", size_en: "KG", price: 175 }], image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758271300/1758271251808-a3b44ede-dc8c-4c49-a86a-78480e0e5d1d_pksmb3.png"] },
            { name_ar: "مشاوي مشكلة لحوم", name_en: "Mixed Meat Grills", sizes: [{ size_ar: "طلب", size_en: "Order", price: 60 }, { size_ar: "نص كيلو", size_en: "Half KG", price: 90.00 }, { size_ar: "كيلو", size_en: "KG", price: 180 }], image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758268597/download_qemaoo.png"] },
            { name_ar: "كبدة مشوية", name_en: "Grilled Liver", price: 40, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758271935/download_lcqzry.png"] },
            { name_ar: "سجق مشوي", name_en: "Grilled Sausage", price: 45, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758271781/download_pr4kql.png"] },
            { name_ar: "حواوشي", name_en: "Hawawshi", price: 22, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758273430/1758273389127-5e442b48-6bd3-482d-acb2-cd9750ab6f3a_ouqazv.png"] },
            { name_ar: "صدور دجاج مشوية", name_en: "Grilled Chicken Breast", price: 40, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758280228/download_xyus8k.png"] },
            { name_ar: "موزة مشوية", name_en: "Grilled Lamb Shank", price: 60, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758280536/1758280515826-251ef559-3cd0-4304-a48c-b374aa2970eb_tyuwt5.png"] },
            { name_ar: "نص فرخة مشوية", name_en: "Half Grilled Chicken", price: 35, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758280447/1758280336466-1ba07c57-af5d-41dd-a26c-d2be87f9631f_pguene.png"] }
        ]
    },
    {
        category_ar: "طواجن وخضار",
        category_en: "Vegetables and Tagens",
        items: [
            { name_ar: "ملوخية سادة", name_en: "Molokhia (Plain)", price: 38, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758298651/1758298623289-e62adf4a-f7f8-448f-88b5-90069b8fd0f6_crycq8.png"] },
            { name_ar: "ملوخية مع دجاج مقلي", name_en: "Molokhia with Fried Chicken", price: 49, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758299063/1758299010845-ba159fb3-c3ab-47e9-96a4-5d1c16dcadf5_amm9cy.png"] },
            { name_ar: "ملوخية مع مكعبات لحم مقلية", name_en: "Molokhia with Fried Meat Cubes", price: 54, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758308202/1758308134885-3209470d-91d2-4325-9b55-6877361757cd_qswyqn.png"] },
            { name_ar: "طاجن مسقعة باللحم المفروم", name_en: "Moussaka Tagen with Minced Meat", price: 40, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758308334/download_v52bfr.png"] },
            { name_ar: "طاجن مسقعة بالبشاميل", name_en: "Moussaka Tagen with Béchamel", price: 45, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758232385/download_aqhrqd.png"] },
            { name_ar: "طاجن بطاطس سادة", name_en: "Potato Tagen (Plain)", price: 35, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758326108/download_pc7gvz.png"] },
            { name_ar: "طاجن بطاطس بالدجاج", name_en: "Potato Tagen with Chicken", price: 45, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758365994/download_astsve.png"] },
            { name_ar: "طاجن بطاطس باللحم", name_en: "Potato Tagen with Meat", price: 45, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758325968/download_lbq4yj.png"] },
            { name_ar: "ورقة لحمة", name_en: "War'et Lahma", price: 50, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758370813/1758370728830-10a40d1e-5b8b-4679-8b26-93324875743f_ktmie6.png"] },
            { name_ar: "طاجن بامية سادة", name_en: "Okra Tagen (Plain)", price: 35, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758371156/download_lnedjk.png"] },
            { name_ar: "طاجن بامية باللحم", name_en: "Okra Tagen with Meat", price: 45, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758371279/download_dtbsnu.png"] },
            { name_ar: "طاجن لحم بالبصل", name_en: "Meat Tagen with Onion", price: 45, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758371925/download_jt98m9.png"] },
            { name_ar: "عكاوي بالبصل", name_en: "Akawi with Onion", price: 46, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758383693/download_m1hkkj.png"] },
            { name_ar: "أرز معمر سادة", name_en: "Plain Maamar Rice", price: 30, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758458262/download_oktmed.png"] },
            { name_ar: "أرز معمر باللحم", name_en: "Maamar Rice with Meat", price: 50, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758458868/1758458780275-57c784aa-8bad-40e4-9d86-4c2ad7befd05_bmafnm.png"] },
            { name_ar: "أرز معمر بالحمام", name_en: "Maamar Rice with Pigeon", price: 70, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758458856/download_f79hih.png"] },
            { name_ar: "ورق عنب بالكوارع", name_en: "Grape Leaves with Trotters", price: 50, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758458353/download_aelrwf.png"] },
            { name_ar: "طاجن موزة بالبطاطس", name_en: "Lamb Shank Tagen with Potatoes", price: 65, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758459242/download_ldgl3p.png"] }
        ]
    },
    {
        category_ar: "الفطير المصري",
        category_en: "The Egyptian Feteer",
        items: [
            { name_ar: "فطيرة مشلتت سادة", name_en: "Plain Feteer Meshaltet", price: 69, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758459589/Gemini_Generated_Image_x3mkcpx3mkcpx3mk_f4vk5c.png"] },
            { name_ar: "فطيرة مكس جبن", name_en: "Mixed Cheese Feteer", price: 49, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758460117/download_s3j3tv.png"] },
            { name_ar: "فطيرة مكس لحوم", name_en: "Mixed Meat Feteer", price: 59, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758460016/download_x7tpj8.png"] },
            { name_ar: "فطيرة خضار مشكلة", name_en: "Mixed Vegetable Feteer", price: 49, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758460659/download_btdbm0.png"] },
            { name_ar: "فطيرة حلو النيل", name_en: "Nile Sweet Feteer", price: 55, image: ["https://res.cloudinary.com/dsi7eogpq/image/upload/v1758461073/download_wlfwy1.png"] }
        ]
    },
    {
        category_ar: "أطباق جانبية",
        category_en: "Side Dishes",
        items: [
            { name_ar: "أرز بالشعيرية", name_en: "Vermicelli Rice", price: 15, image: ["https://images.unsplash.com/photo-1627727409249-14a5160c878e"] },
            { name_ar: "أرز ابيض", name_en: "White Rice", price: 15, image: ["https://images.unsplash.com/photo-1627727409249-14a5160c878e"] },
            { name_ar: "رز بالخلطة", name_en: "Mixed Rice", price: 18, image: ["https://images.unsplash.com/photo-1627727409249-14a5160c878e"] }
        ]
    }
];
