import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import Text from '../common/Text';
import Container from '../common/Container';

export default function ServicesHero() {
  return (
    <div className="relative py-24 bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <TrendingUp className="h-16 w-16 text-accent" />
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <Text variant="h1" className="mb-6 whitespace-nowrap">
              Financial Services & Solutions
            </Text>
            
            <Text variant="body" className="text-accent-light text-lg md:text-xl">
              Comprehensive investment banking and advisory services tailored for an evolving financial landscape
            </Text>
          </div>
        </motion.div>
      </Container>

      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}