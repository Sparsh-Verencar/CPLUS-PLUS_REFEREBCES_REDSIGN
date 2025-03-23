import React from 'react';
import { motion } from 'framer-motion';

const Containers = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="p-4 md:p-8 bg-gradient-to-t from-gray-900 to-slate-700 text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Standard Containers in C++</h1>
        <p className="mb-4">
          A container is a holder object that stores a collection of other objects (its elements). They are implemented as class templates, which allows great flexibility in the types supported as elements.
        </p>
        <p className="mb-4">
          The container manages the storage space for its elements and provides member functions to access them, either directly or through iterators (reference objects with similar properties to pointers).
        </p>
        <p className="mb-6">
          Containers replicate structures very commonly used in programming: dynamic arrays (<code>vector</code>), queues (<code>queue</code>), stacks (<code>stack</code>), heaps (<code>priority_queue</code>), linked lists (<code>list</code>), trees (<code>set</code>), associative arrays (<code>map</code>), and more.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <h2 className="text-2xl font-bold mt-8 mb-4">Container Class Templates</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Sequence Containers</h3>
          <ul className="list-disc list-inside">
            <li><code>array</code> - Array class (class template)</li>
            <li><code>vector</code> - Vector (class template)</li>
            <li><code>deque</code> - Double-ended queue (class template)</li>
            <li><code>forward_list</code> - Forward list (class template)</li>
            <li><code>list</code> - List (class template)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Container Adaptors</h3>
          <ul className="list-disc list-inside">
            <li><code>stack</code> - LIFO stack (class template)</li>
            <li><code>queue</code> - FIFO queue (class template)</li>
            <li><code>priority_queue</code> - Priority queue (class template)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Associative Containers</h3>
          <ul className="list-disc list-inside">
            <li><code>set</code> - Set (class template)</li>
            <li><code>multiset</code> - Multiple-key set (class template)</li>
            <li><code>map</code> - Map (class template)</li>
            <li><code>multimap</code> - Multiple-key map (class template)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Unordered Associative Containers</h3>
          <ul className="list-disc list-inside">
            <li><code>unordered_set</code> - Unordered Set (class template)</li>
            <li><code>unordered_multiset</code> - Unordered Multiset (class template)</li>
            <li><code>unordered_map</code> - Unordered Map (class template)</li>
            <li><code>unordered_multimap</code> - Unordered Multimap (class template)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Other</h3>
          <ul className="list-disc list-inside">
            <li><code>bitset</code> - Bitset (class template)</li>
            <li><code>valarray</code> - Valarray (class template)</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <h2 className="text-2xl font-bold mt-8 mb-4">Member Map</h2>
        <p className="mb-4">
          Below is a comparison chart with the different member functions present in each of the containers:
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">Sequence Containers</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
            <thead>
              <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
                <th className="px-4 py-2 border">Members</th>
                <th className="px-4 py-2 border"><code>array</code></th>
                <th className="px-4 py-2 border"><code>vector</code></th>
                <th className="px-4 py-2 border"><code>deque</code></th>
                <th className="px-4 py-2 border"><code>forward_list</code></th>
                <th className="px-4 py-2 border"><code>list</code></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">constructor</td>
                <td className="px-4 py-2 border">implicit</td>
                <td className="px-4 py-2 border"><code>vector</code></td>
                <td className="px-4 py-2 border"><code>deque</code></td>
                <td className="px-4 py-2 border"><code>forward_list</code></td>
                <td className="px-4 py-2 border"><code>list</code></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">destructor</td>
                <td className="px-4 py-2 border">implicit</td>
                <td className="px-4 py-2 border"><code>~vector</code></td>
                <td className="px-4 py-2 border"><code>~deque</code></td>
                <td className="px-4 py-2 border"><code>~forward_list</code></td>
                <td className="px-4 py-2 border"><code>~list</code></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border"><code>operator=</code></td>
                <td className="px-4 py-2 border">implicit</td>
                <td className="px-4 py-2 border"><code>operator=</code></td>
                <td className="px-4 py-2 border"><code>operator=</code></td>
                <td className="px-4 py-2 border"><code>operator=</code></td>
                <td className="px-4 py-2 border"><code>operator=</code></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">iterators</td>
                <td className="px-4 py-2 border"><code>begin</code></td>
                <td className="px-4 py-2 border"><code>begin</code></td>
                <td className="px-4 py-2 border"><code>begin</code></td>
                <td className="px-4 py-2 border"><code>begin</code></td>
                <td className="px-4 py-2 border"><code>begin</code></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border"><code>end</code></td>
                <td className="px-4 py-2 border"><code>end</code></td>
                <td className="px-4 py-2 border"><code>end</code></td>
                <td className="px-4 py-2 border"><code>end</code></td>
                <td className="px-4 py-2 border"><code>end</code></td>
                <td className="px-4 py-2 border"><code>end</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-4">Associative Containers</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
            <thead>
              <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
                <th className="px-4 py-2 border">Members</th>
                <th className="px-4 py-2 border"><code>set</code></th>
                <th className="px-4 py-2 border"><code>multiset</code></th>
                <th className="px-4 py-2 border"><code>map</code></th>
                <th className="px-4 py-2 border"><code>multimap</code></th>
                <th className="px-4 py-2 border"><code>unordered_set</code></th>
                <th className="px-4 py-2 border"><code>unordered_multiset</code></th>
                <th className="px-4 py-2 border"><code>unordered_map</code></th>
                <th className="px-4 py-2 border"><code>unordered_multimap</code></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">constructor</td>
                <td className="px-4 py-2 border"><code>set</code></td>
                <td className="px-4 py-2 border"><code>multiset</code></td>
                <td className="px-4 py-2 border"><code>map</code></td>
                <td className="px-4 py-2 border"><code>multimap</code></td>
                <td className="px-4 py-2 border"><code>unordered_set</code></td>
                <td className="px-4 py-2 border"><code>unordered_multiset</code></td>
                <td className="px-4 py-2 border"><code>unordered_map</code></td>
                <td className="px-4 py-2 border"><code>unordered_multimap</code></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">destructor</td>
                <td className="px-4 py-2 border"><code>~set</code></td>
                <td className="px-4 py-2 border"><code>~multiset</code></td>
                <td className="px-4 py-2 border"><code>~map</code></td>
                <td className="px-4 py-2 border"><code>~multimap</code></td>
                <td className="px-4 py-2 border"><code>~unordered_set</code></td>
                <td className="px-4 py-2 border"><code>~unordered_multiset</code></td>
                <td className="px-4 py-2 border"><code>~unordered_map</code></td>
                <td className="px-4 py-2 border"><code>~unordered_multimap</code></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border"><code>operator=</code></td>
                <td className="px-4 py-2 border"><code>operator=</code></td>
                <td className="px-4 py-2 border"><code>operator=</code></td>
                <td className="px-4 py-2 border"><code>operator=</code></td>
                <td className="px-4 py-2 border"><code>operator=</code></td>
                <td className="px-4 py-2 border"><code>operator=</code></td>
                <td className="px-4 py-2 border"><code>operator=</code></td>
                <td className="px-4 py-2 border"><code>operator=</code></td>
                <td className="px-4 py-2 border"><code>operator=</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Containers;