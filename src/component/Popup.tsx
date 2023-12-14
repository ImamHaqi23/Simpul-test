import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Popup = ({ isOpen, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-24 right-20 bg-white p-4 rounded-md shadow-md "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, x: 65 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {content}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
