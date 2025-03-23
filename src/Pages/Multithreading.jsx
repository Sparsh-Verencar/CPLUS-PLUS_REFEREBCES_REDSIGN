import React from 'react';
import { motion } from 'framer-motion';

const MultiThreadingDoc = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const tableRowVariants = {
    hover: { scale: 1.02, backgroundColor: '#374151', transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="p-4 md:p-8 bg-gradient-to-t from-gray-900 to-slate-700"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-4 md:mb-6"
        variants={fadeInVariants}
      >
        Multi-threading in C++
      </motion.h1>

      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        C++ provides robust support for multi-threading, allowing developers to write concurrent programs that can execute multiple threads simultaneously. This is essential for improving performance in applications that require parallel processing, such as simulations, games, and data processing.
      </motion.p>
      <motion.p
        className="mb-6 text-sm md:text-base"
        variants={fadeInVariants}
      >
        The C++ standard library includes several headers and classes to support multi-threading, including <code>&lt;atomic&gt;</code>, <code>&lt;thread&gt;</code>, <code>&lt;mutex&gt;</code>, <code>&lt;condition_variable&gt;</code>, and <code>&lt;future&gt;</code>.
      </motion.p>

      <motion.h2
        className="text-2xl md:text-2xl font-bold mt-6 md:mt-8 mb-4"
        variants={fadeInVariants}
      >
        Headers
      </motion.h2>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        The following headers are essential for multi-threading in C++:
      </motion.p>

      <motion.div
        className="overflow-x-auto mb-6"
        variants={fadeInVariants}
      >
        <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
              <th className="px-4 py-2 border text-sm md:text-base">Header</th>
              <th className="px-4 py-2 border text-sm md:text-base">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              { header: '<atomic>', description: 'Provides atomic operations for thread-safe access to shared data.' },
              { header: '<thread>', description: 'Defines the std::thread class for creating and managing threads.' },
              { header: '<mutex>', description: 'Provides mutual exclusion mechanisms like std::mutex to protect shared data.' },
              { header: '<condition_variable>', description: 'Allows threads to wait for certain conditions to be met.' },
              { header: '<future>', description: 'Provides facilities for asynchronous computation and retrieving results.' },
            ].map((row, index) => (
              <motion.tr
                key={index}
                className="hover:bg-gray-800"
                variants={tableRowVariants}
                whileHover="hover"
              >
                <td className="px-4 py-2 border text-sm md:text-base">
                  <code>{row.header}</code>
                </td>
                <td className="px-4 py-2 border text-sm md:text-base">
                  {row.description}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.h2
        className="text-2xl md:text-2xl font-bold mt-6 md:mt-8 mb-4"
        variants={fadeInVariants}
      >
        Atomic Operations
      </motion.h2>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        Atomic operations are operations that are executed without interference from other threads. They are essential for thread-safe access to shared data. The <code>&lt;atomic&gt;</code> header provides atomic types and operations.
      </motion.p>
      <motion.pre
        className="bg-gray-900 text-white p-4 rounded-lg mb-6"
        variants={fadeInVariants}
      >
        <code className="text-sm md:text-base">
          {`#include <atomic>
#include <iostream>
#include <thread>

std::atomic<int> counter(0);

void increment() {
    for (int i = 0; i < 1000; ++i) {
        counter++;
    }
}

int main() {
    std::thread t1(increment);
    std::thread t2(increment);

    t1.join();
    t2.join();

    std::cout << "Counter: " << counter << std::endl;
    return 0;
}`}
        </code>
      </motion.pre>
      <motion.p
        className="mb-6 text-sm md:text-base"
        variants={fadeInVariants}
      >
        In this example, <code>std::atomic&lt;int&gt;</code> ensures that the <code>counter</code> variable is accessed atomically, preventing data races.
      </motion.p>

      <motion.h2
        className="text-2xl md:text-2xl font-bold mt-6 md:mt-8 mb-4"
        variants={fadeInVariants}
      >
        Threads
      </motion.h2>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        The <code>&lt;thread&gt;</code> header provides the <code>std::thread</code> class for creating and managing threads. Threads allow you to execute multiple functions concurrently.
      </motion.p>
      <motion.pre
        className="bg-gray-900 text-white p-4 rounded-lg mb-6"
        variants={fadeInVariants}
      >
        <code className="text-sm md:text-base">
          {`#include <iostream>
#include <thread>

void printHello() {
    std::cout << "Hello from thread!" << std::endl;
}

int main() {
    std::thread t(printHello);
    t.join(); // Wait for the thread to finish
    return 0;
}`}
        </code>
      </motion.pre>
      <motion.p
        className="mb-6 text-sm md:text-base"
        variants={fadeInVariants}
      >
        In this example, a new thread is created to execute the <code>printHello</code> function.
      </motion.p>

      <motion.h2
        className="text-2xl md:text-2xl font-bold mt-6 md:mt-8 mb-4"
        variants={fadeInVariants}
      >
        Mutexes
      </motion.h2>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        Mutexes are used to protect shared data from being accessed simultaneously by multiple threads. The <code>&lt;mutex&gt;</code> header provides the <code>std::mutex</code> class.
      </motion.p>
      <motion.pre
        className="bg-gray-900 text-white p-4 rounded-lg mb-6"
        variants={fadeInVariants}
      >
        <code className="text-sm md:text-base">
          {`#include <iostream>
#include <thread>
#include <mutex>

std::mutex mtx;
int sharedData = 0;

void increment() {
    for (int i = 0; i < 1000; ++i) {
        mtx.lock();
        sharedData++;
        mtx.unlock();
    }
}

int main() {
    std::thread t1(increment);
    std::thread t2(increment);

    t1.join();
    t2.join();

    std::cout << "Shared Data: " << sharedData << std::endl;
    return 0;
}`}
        </code>
      </motion.pre>
      <motion.p
        className="mb-6 text-sm md:text-base"
        variants={fadeInVariants}
      >
        In this example, <code>std::mutex</code> ensures that only one thread can access <code>sharedData</code> at a time.
      </motion.p>

      <motion.h2
        className="text-2xl md:text-2xl font-bold mt-6 md:mt-8 mb-4"
        variants={fadeInVariants}
      >
        Condition Variables
      </motion.h2>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        Condition variables allow threads to wait for certain conditions to be met. They are often used with mutexes to synchronize threads.
      </motion.p>
      <motion.pre
        className="bg-gray-900 text-white p-4 rounded-lg mb-6"
        variants={fadeInVariants}
      >
        <code className="text-sm md:text-base">
          {`#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>

std::mutex mtx;
std::condition_variable cv;
bool ready = false;

void printId(int id) {
    std::unique_lock<std::mutex> lock(mtx);
    cv.wait(lock, []{ return ready; });
    std::cout << "Thread " << id << " is running!" << std::endl;
}

int main() {
    std::thread threads[5];
    for (int i = 0; i < 5; ++i) {
        threads[i] = std::thread(printId, i);
    }

    std::this_thread::sleep_for(std::chrono::seconds(1));
    {
        std::lock_guard<std::mutex> lock(mtx);
        ready = true;
    }
    cv.notify_all();

    for (auto& t : threads) {
        t.join();
    }

    return 0;
}`}
        </code>
      </motion.pre>
      <motion.p
        className="mb-6 text-sm md:text-base"
        variants={fadeInVariants}
      >
        In this example, threads wait for the <code>ready</code> variable to become <code>true</code> before proceeding.
      </motion.p>

      <motion.h2
        className="text-2xl md:text-2xl font-bold mt-6 md:mt-8 mb-4"
        variants={fadeInVariants}
      >
        Futures and Promises
      </motion.h2>
      <motion.p
        className="mb-4 text-sm md:text-base"
        variants={fadeInVariants}
      >
        The <code>&lt;future&gt;</code> header provides facilities for asynchronous computation and retrieving results. The <code>std::future</code> and <code>std::promise</code> classes are commonly used.
      </motion.p>
      <motion.pre
        className="bg-gray-900 text-white p-4 rounded-lg mb-6"
        variants={fadeInVariants}
      >
        <code className="text-sm md:text-base">
          {`#include <iostream>
#include <future>

int compute() {
    return 42;
}

int main() {
    std::future<int> result = std::async(compute);
    std::cout << "Result: " << result.get() << std::endl;
    return 0;
}`}
        </code>
      </motion.pre>
      <motion.p
        className="mb-6 text-sm md:text-base"
        variants={fadeInVariants}
      >
        In this example, <code>std::async</code> runs the <code>compute</code> function asynchronously, and <code>std::future</code> retrieves the result.
      </motion.p>
    </motion.div>
  );
};

export default MultiThreadingDoc;