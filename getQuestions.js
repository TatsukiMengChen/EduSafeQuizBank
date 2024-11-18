getQuestions = () => {
  // 获取所有题目元素
  const questionElements = document.querySelectorAll('.questionLi');

  // 创建一个数组来存储题目
  const questions = [];

  // 遍历每个题目元素
  questionElements.forEach(questionElement => {
      // 获取题目编号和内容
      const questionNumber = questionElement.querySelector('.mark_name').innerText.trim().split(".")[0];
      const questionText = questionElement.querySelector('.mark_name > div').textContent.trim();

      // 获取所有选项
      const options = [];
      const optionElements = questionElement.querySelectorAll('.stem_answer .answerBg');
      optionElements.forEach(optionElement => {
          const optionText = optionElement.querySelector('.answer_p').textContent.trim();
          options.push(optionText);
      });

      // 将题目和选项添加到数组中
      questions.push({
          number: questionNumber,
          question: questionText,
          options: options
      });
  });
  return questions
}



function parseTextToJson(text) {
  // 使用正则表达式匹配双换行符，并将其切割成数组
  const array = text.split(/\n\n/);

  // 将每个段落转换成 {question, answer} 对象
  const result = array.map(item => {
    // 使用正则表达式匹配 "正确答案" 后面的内容
    const answerMatch = item.match(/正确答案\s*([A-D])/);
    const answer = answerMatch ? answerMatch[1] : null;

    // 去除 "正确答案" 及其后面的内容，得到问题部分
    const question = item

    return { question, answer };
  });

  return result;
}

function fuzzySearch(list, query) {
  // 将查询字符串转换为小写，以便进行不区分大小写的搜索
  const lowerCaseQuery = query.toLowerCase();

  // 过滤出包含查询字符串的项
  const results = list.filter(item => {
      return item.question.toLowerCase().includes(lowerCaseQuery);
  });

  // 返回匹配的结果
  return results;
}