import { motion } from "framer-motion";

function Card({ name, image }) {
  return (
    <motion.div
      className="w-64 bg-white/10 p-4 rounded-xl text-white border border-white/20 backdrop-blur-lg cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* PRODUCT NAME */}
      <h2 className="text-xl font-semibold text-center mb-4">{name}</h2>

      {/* IMAGE APPEARS ON HOVER */}
      <motion.img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg opacity-0"
        whileHover={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

export default Card;
